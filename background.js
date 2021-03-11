function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

cookie = getCookie("aws-userInfo")

try {
	userInfo = JSON.parse(cookie)
	username = userInfo.username
	username = decodeURIComponent(username)
	alert("XM | user is: " + username)
}
catch(e){
	alert("no user is logged in")
}