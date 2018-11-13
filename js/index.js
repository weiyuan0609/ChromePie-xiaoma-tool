function b() {
  console.log('222222');
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.29.218:8888/rest/popular/1/stream/content?days=7&pageSize=20", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      console.log('dddd222::', resp);
    } else {
      console.log('over::');
    }
  }
  xhr.send();
}

b();

function getContent() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.71.212/zentaopms/www/my/", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log('uuu', xhr.responseText);
      document.getElementById('content').innerText = xhr.responseText;
    }
  }
  xhr.send();
  
  xhr.open("GET", "http://192.168.71.212/zentaopms/www/block-printBlock-977-my.html", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log('uuu2222', xhr.responseText);
      document.getElementById('content').innerText = xhr.responseText;
    }
  }
  xhr.send();
}

getContent();
