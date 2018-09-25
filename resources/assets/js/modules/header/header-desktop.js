module.exports = () => {
    const DESKTOP_SEARCH = document.querySelector('.header__input-search-wrapper');
    const BODY = document.querySelector('body');

    function toggledesktopsearch() {
        if (!BODY.classList.contains('desktop-search--is-open')) {
            BODY.classList.add('desktop-search--is-open');
        }
    }

    DESKTOP_SEARCH.addEventListener('click', () => toggledesktopsearch());

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('mobile-nav__wrapper')) {
            BODY.classList.remove('desktop-search--is-open');
        }
    });
};
