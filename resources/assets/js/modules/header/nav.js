module.exports = () => {
    const BODY = document.querySelector('body');
    const FILTER_DROPDOWN = document.querySelector('.filters__dropdown');
    const FILTER_ITEMS = document.querySelectorAll('.filters__dropdown .filters__item');

    console.log(FILTER_DROPDOWN, BODY);

    FILTER_DROPDOWN.addEventListener('click', () => {
        BODY.classList.contains('filter-dropdown-is-expanded')
            ? BODY.classList.remove('filter-dropdown-is-expanded')
            : BODY.classList.add('filter-dropdown-is-expanded');
    });

    FILTER_ITEMS.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            item.classList.contains('active-filter')
                ? item.classList.remove('active-filter')
                : item.classList.add('active-filter');
        });
    });
};
