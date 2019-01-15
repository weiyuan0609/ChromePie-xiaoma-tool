let confluenceContent = '';
let zenTaoContent = '';

function fetch(url, func) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) func(xhr);
  }
  xhr.send();
}

function getConfluenceContent() {
  fetch(
    `${CONFLUENCE_URL}/rest/popular/1/stream/content?days=7&pageSize=60`,
    (xhr) => {
      try {
        const resp = JSON.parse(xhr.responseText);
        const result = resp.streamItems.map(item => {
          return `
            <div class="confluence-item">
              <div class="confluence-zan">
                <p>^</p>
                <p>${item.numberOfLikes}</p>
              </div>
              <div class="confluence-right">
                <p>
                  <a href="${CONFLUENCE_URL}${item.url}" target="_blank">${item.title}</a>
                </p>
                <div class="confluence-right-p">
                  <div>${item.friendlyDate}</div>
                  <div class="author">
                    <img class="avator" src="${CONFLUENCE_URL}${item.author.avatarUrl}"/>
                    <a href="${CONFLUENCE_URL}${item.author.url}" target="_blank">${item.author.fullName}</a>
                  </div>
                </div>
              </div>          
            </div>
          `
        });
        const container = document.createElement('div');    
        for (let i = 0; i < result.length; i++) {
          container.innerHTML += result[i];
        }
        document.querySelector('.confluence').innerHTML = container.innerHTML;
      } catch (e) {
        const errerDiv = `
          <div class="error-go-login">
            <a href="${CONFLUENCE_URL}/dashboard.action" class="login-button">去登陆</a>
          </div>
        `;
        document.querySelector('.confluence').innerHTML = errerDiv;
      } 
    }
  );
}

function getConfluenceNewContent() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${CONFLUENCE_URL}/rest/dashboardmacros/1.0/updates?maxResults=40&tab=all&showProfilePic=true&labels=&spaces=&users=&types=&category=&spaceKey=`, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      const resp = JSON.parse(xhr.responseText);
      const result = [];
      for (let i = 0; i < resp.changeSets.length; i++) {
        for (let j = 0; j < resp.changeSets[i].recentUpdates.length; j++) {
          const item = resp.changeSets[i].recentUpdates[j];
          result.push(`
            <div class="confluence-item">
              <div class="confluence-zan">
                <p>^</p>
                <p>${item.numberOfLikes || 0}</p>
              </div>
              <div class="confluence-right">
                <p>
                  <a href="${CONFLUENCE_URL}${item.urlPath}" target="_blank">${item.title}</a>
                </p>
                <div class="confluence-right-p">
                  <div>${item.friendlyUpdateTime}</div>
                  <div class="author">
                    <img class="avator" src="${CONFLUENCE_URL}${resp.changeSets[i].profilePictureInfo.downloadPath}"/>
                    <a href="javascript:;" target="_blank">${resp.changeSets[i].modifier.fullName}</a>
                  </div>
                </div>
              </div>          
            </div>
          `);
        }
      }
      const container = document.createElement('div');    
      for (let i = 0; i < result.length; i++) {
        container.innerHTML += result[i];
      }
      document.querySelector('.confluence').innerHTML = container.innerHTML;
    }
  }
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
  const params = "maxResults=20&tab=all&showProfilePic=true&labels=&spaces=&users=&types=&category=&spaceKey=&";
  xhr.send(params);  
}

function getZenTaoContent() {
  fetch(
    `${ZENTAO_URL}/zentaopms/www/my/`,
    (xhr) => {
      try {
        const container = document.createElement('div');
        container.innerHTML = xhr.responseText;
        const bug = container.querySelector("[data-name='指派给我的Bug']").getAttribute('data-url');
        const work = container.querySelector("[data-name='最新动态']").getAttribute('data-url');
      
        fetch(
          `${ZENTAO_URL}${bug}`,
          (xhr) => {
            document.querySelector('.zentao-bug').innerHTML = xhr.responseText;
            document.querySelector('.zentao-bug')
          }
        );
      
        fetch(
          `${ZENTAO_URL}${work}`,
          (xhr) => {
            document.querySelector('.zentao-work').innerHTML = xhr.responseText;
          }
        );
      } catch (e) {
        const errerDiv = `
          <div class="error-go-login">
            <a href="${ZENTAO_URL}/zentaopms/www/my" class="login-button">去登陆</a>
          </div>
        `;
        document.querySelector('.zentao-bug').innerHTML = errerDiv;
        document.querySelector('.zentao-work').innerHTML = errerDiv;
      }
    }
  );
}

function getGiteeContent() {
  fetch(
    `${GITEE_URL}/api/v3/internal/my_resources`,
    (xhr) => {
      const { projects_path, projects_count } = JSON.parse(xhr.responseText);
      const page = Math.ceil(projects_count / 10);
      for (let i = 0; i < page; i++) {
        fetch(
          `${GITEE_URL}/${projects_path}?page=${i+1}`,
          (xhr) => {
            const container = document.createElement('div');
            container.innerHTML = xhr.responseText;
            const items = container.querySelector('#search-projects-ulist').querySelectorAll('.project')
            const result = Array.from(items).map(item => {
              const createTime = item.querySelector('.create-time').innerText.split(/^\r|\r\n|\n|\s$/);
              return `
                <div class="gitee-item">
                  <div class="gitee-item-left">
                    <a href="${GITEE_URL}${item.querySelector('.author').getAttribute('href')}" target="_blank">
                      ${item.querySelector('.author').getAttribute('title')}
                    </a>
                    /
                    <a href="${GITEE_URL}${item.querySelector('.repository').getAttribute('href')}" target="_blank">
                      ${item.querySelector('.repository').getAttribute('title')}
                    </a>
                  </div>
                  <div class="gitee-item-right">
                    <div>
                      ${item.querySelector('.description').innerText}
                    </div>
                    <div clss="">
                      ${createTime[1]} ${createTime[2]}
                    </div>
                  </div>
                </div>
              `
            });  
            for (let j = 0; j < result.length; j++) {
              document.querySelector('.gitee').innerHTML += result[j];
            }
          }
        );
      }
      if (!page) {
        const errerDiv = `
          <div class="error-go-login">
            <a href="${GITEE_URL}/login" class="login-button">去登陆</a>
          </div>
        `;
        document.querySelector('.gitee').innerHTML = errerDiv;
      }
    }
  );
}

function getMenuPage(menuConfig, pageId) {
  const leftMenus = menuConfig.map(item => {
    return `<li><a href="#${item.title}">${item.name}</a></li>`;
  });
  for (let j = 0; j < leftMenus.length; j++) {
    document.querySelector(`#${pageId} .left-menu ul`).innerHTML += leftMenus[j];
  }
  const rightContents = menuConfig.map(item => {
    return `
      <div class="right-content-item">
        <div class="right-content-header" name="${item.title}">${item.name}</div>
        <div class="content-cards" id="${item.title}">
          ${getContent(item.title, item.urls)}
        </div>
      </div>
    `
  });
  for (let j = 0; j < rightContents.length; j++) {
    document.querySelector(`#${pageId} .right-content`).innerHTML += rightContents[j];
  }
}

function getTwoContent() {
  getMenuPage(TWO_PAGE_MENU, 'container-two');
}

function getThreeContent() {
  getMenuPage(THREE_PAGE_MENU, 'container-three');

}

/**
 * @param {string} id
 * @param {array or object} item 
 */
function getContent(id, obj) {
  if (obj instanceof Array) {
    const result = obj.map(item => {
      return `
        <a href="${item.url}" target="_blank">
          <div class="content-cards-item">
            <img src="${item.img}"/>
            ${item.name}
          </div>
        </a>
      `
    });
    return result.join('');
  }
  return `
    <a href="${obj.url}" target="_blank">
      <div class="content-cards-item">
        <img src="${obj.img}"/>
        ${obj.name}
      </div>
    </a>
  `;
}

function init() {
  getConfluenceContent();
  getZenTaoContent();
  getGiteeContent();
  getTwoContent();
  getThreeContent();
  // setTimeout(() => console.clear(), 2000);
}

init();

$('.zentao-content').on('click', 'tr', function() {
  const url = ZENTAO_URL + $(this)[0].getAttribute('data-url');
  if (!$(this)[0].getAttribute('data-url')) {
    return;
  }
  window.open(url);
})

$('.zentao-content').on('click', 'a', function(e) {
  if ($(this).hasClass("login-button")) {
    return
  }
  e.preventDefault();
  const url = ZENTAO_URL + e.target.getAttribute('href');
  window.open(url);
})

$('.nav').on('click', '.nav-button', function() {
  $('.nav-button').css('color', '#646c7b');
  $(this).css('color', '#eb3136');

  const containerId = '#container-' + $(this)[0].getAttribute('id').split('-')[1];
  $('.container').css('display', 'none');
  $(containerId).css('display', 'flex');
})

$('.confluence-content').on('click', '.confluence-button', function() {
  $('.confluence-button').css('color', '#646c7b');
  $(this).css('color', '#eb3136');
  if ($(this).attr('id') === 'confluence-header-button-1') {
    getConfluenceContent();
  } else {
    getConfluenceNewContent();
  }
})

$('header').on('click', '.switch', function() {
  if ($(this).attr('class').includes('on')) {
    $(this).removeClass('on');
  } else {
    $(this).addClass('on');
  }
});
