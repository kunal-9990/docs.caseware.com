module.exports = () => {
    const FILTER_ITEMS = document.querySelectorAll('.filters__dropdown .filters__item');

    FILTER_ITEMS.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            item.classList.contains('active-filter')
                ? item.classList.remove('active-filter')
                : item.classList.add('active-filter');
        });
    });
};
