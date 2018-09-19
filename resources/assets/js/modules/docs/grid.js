module.exports = () => {
    // for xs/sm/md bps we use container-fluid bootstrap class

    const DOCS_CONTAINER = document.querySelector('div.container.documentation');

    function setGridClass() {
        if (window.innerWidth <= 1199) {
            DOCS_CONTAINER.classList.remove('container');
            DOCS_CONTAINER.classList.add('container-fluid');
        } else {
            DOCS_CONTAINER.classList.remove('container-fluid');
            DOCS_CONTAINER.classList.add('container');
        }
    }
    setGridClass();

    window.addEventListener('resize', setGridClass);
};
