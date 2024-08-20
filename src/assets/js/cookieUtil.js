// 设置cookie
export    function setCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// 获取cookie
export function getCookie(name) {
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookies = decodedCookie.split(';');
  for(var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + "=") == 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}
