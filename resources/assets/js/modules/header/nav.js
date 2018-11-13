module.exports = () => {
    // const filter = require('../filter');
    const BODY = document.querySelector('body');
    const FILTER_DROPDOWN = document.querySelector('.filters__dropdown');
    const FILTER_ITEMS = document.querySelectorAll('span.slider.round');

    FILTER_DROPDOWN.addEventListener('click', () => {
        BODY.classList.toggle('filter-dropdown-is-expanded');
    });

    FILTER_ITEMS.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.target.closest('.switch-wrap').classList.toggle('is-active');
        });
    });
};
