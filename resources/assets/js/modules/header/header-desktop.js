module.exports = () => {
    const LANG_DROPDOWN = document.querySelector('.header__lang-picker--js');
    const HEADER_NAV = document.querySelector('.header__nav');
    const DESKTOP_SEARCH = document.querySelector('.header__input-search-wrapper');
    const BODY = document.querySelector('body');

    function toggleLangDropdown(event) {
        const langToggle = HEADER_NAV.classList;
        event.preventDefault();
        langToggle.contains('lang-list--is-open')
            ? langToggle.remove('lang-list--is-open')
            : langToggle.add('lang-list--is-open');
    }

    function toggledesktopsearch() {
        if (!BODY.classList.contains('desktop-search--is-open')) {
            BODY.classList.add('desktop-search--is-open');
        }
    }

    LANG_DROPDOWN.addEventListener('click', () => toggleLangDropdown());
    DESKTOP_SEARCH.addEventListener('click', () => toggledesktopsearch());

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('mobile-nav__wrapper')) {
            BODY.classList.remove('desktop-search--is-open');
        }
    });
};
