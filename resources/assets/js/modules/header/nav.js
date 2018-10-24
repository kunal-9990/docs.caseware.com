module.exports = () => {
    const BODY = document.querySelector('body');
    const FILTER_DROPDOWN = document.querySelector('.filters__dropdown');
    const FILTER_ITEMS = document.querySelectorAll('.expanded-filters .filters__item');

    FILTER_DROPDOWN.addEventListener('click', () => {
        BODY.classList.toggle('filter-dropdown-is-expanded');
    });

    FILTER_ITEMS.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active-filter');
        });
    });
};
