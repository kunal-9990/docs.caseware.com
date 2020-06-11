module.exports = () => {

  const cookieBtn = document.querySelector('.cookie__btn');
  const cookieNotification = document.querySelector('.cookie');

  cookieBtn.addEventListener('click', () => {
    setCookie('cookie-consent', true)
    console.log("CLICK");
    cookieNotification.style.display = "none";
  });

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }

};