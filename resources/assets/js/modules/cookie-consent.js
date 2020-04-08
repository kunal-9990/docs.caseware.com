module.exports = () => {

  const cookieBtn = document.querySelector('.cookie__btn');
  const cookieNotification = document.querySelector('.cookie');

  cookieBtn.addEventListener('click', () => {
    console.log("Consent button click");
    setCookie('cookie-consent', true)
    cookieNotification.style.display = "none";
  });

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }

};