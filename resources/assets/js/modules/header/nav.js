module.exports = () => {
    // const filter = require('../filter');
    const BODY = document.querySelector('body');
    const FILTER_DROPDOWN = document.querySelector('.filters__dropdown');
    const FILTER_ITEMS = document.querySelectorAll('span.slider.round');
    const BREAK_SPACES = document.querySelectorAll('.filters__menu .switch-name__no-wrap');

    FILTER_DROPDOWN.addEventListener('click', () => {
        BODY.classList.toggle('filter-dropdown-is-expanded');
    });

    FILTER_ITEMS.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.target.closest('.switch-wrap').classList.toggle('is-active');
        });
    });

    function toggleProductFilterInnerHTMLSpacing() {
        if (window.innerWidth < 950) {
            BREAK_SPACES.forEach((el) => {
                el.innerHTML = ' ';
            });
        } else {
            BREAK_SPACES.forEach((el) => {
                el.innerHTML = '&nbsp;';
            });
        }
    }

    window.addEventListener('resize', _.throttle(toggleProductFilterInnerHTMLSpacing, 1000));
};
