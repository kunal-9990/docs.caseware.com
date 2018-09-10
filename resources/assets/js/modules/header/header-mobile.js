module.exports = () => {
    const MOBILE_NAV_TOGGLE = document.querySelectorAll('.header-mobile__nav-toggle');
    const MOBILE_SEARCH_TOGGLE = document.querySelectorAll('.header-mobile__search--js');
    const BODY = document.querySelector('body');

    function toggleMobileNav() {
        BODY.classList.contains('mobile-nav--is-open')
            ? BODY.classList.remove('mobile-nav--is-open')
            : BODY.classList.add('mobile-nav--is-open');

        // close search if open
        BODY.classList.remove('mobile-search--is-open');
    }

    function toggleMobilesearch() {
        BODY.classList.contains('mobile-search--is-open')
            ? BODY.classList.remove('mobile-search--is-open')
            : BODY.classList.add('mobile-search--is-open');
    }

    MOBILE_NAV_TOGGLE.forEach((btn) => {
        btn.addEventListener('click', () => toggleMobileNav());
    });

    MOBILE_SEARCH_TOGGLE.forEach((btn) => {
        btn.addEventListener('click', () => toggleMobilesearch());
    });

    // close mobile nav if click is outside nav bounds
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('mobile-nav__wrapper')) {
            BODY.classList.remove('mobile-nav--is-open');
        }
    });
};
