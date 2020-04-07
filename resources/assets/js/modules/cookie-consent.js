module.exports = () => {

  const cookieBtn = document.querySelector('.cookie__btn');
  const cookieNotification = document.querySelector('.cookie');

  cookieBtn.addEventListener('click', () => {
    setCookie('cookie-consent', true, 1)
    cookieNotification.style.display = "none";
  });

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
};