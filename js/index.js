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
    `${CONFLUENCE_URL}/rest/popular/1/stream/content?days=7&pageSize=20`,
    (xhr) => {
      const resp = JSON.parse(xhr.responseText);
      console.log('con::', resp);
    }
  );
}

function getZenTaoContent() {
  fetch(
    `${ZENTAO_URL}/zentaopms/www/my/`,
    (xhr) => {
      const container = document.createElement('div');
      container.innerHTML = xhr.responseText;
      const bug = container.querySelector("[data-name='指派给我的Bug']").getAttribute('data-url');
      const work = container.querySelector("[data-name='指派给我的任务']").getAttribute('data-url');
    
      fetch(
        `${ZENTAO_URL}${bug}`,
        (xhr) => {
          console.log('bug', bug, xhr.responseText);
        }
      );
    
      fetch(
        `${ZENTAO_URL}${work}`,
        (xhr) => {
          console.log('work', work, xhr.responseText);
        }
      );
    }
  );
}

getConfluenceContent();
getZenTaoContent();
