module.exports = () => {
    // for xs/sm/md bps we use container-fluid bootstrap class
    let DOCS_CONTAINER = null;
    let isDocsContainerAvailable = false;
    let HEADER_CONTAINER = null;
    let isHeaderContainerAvailable = false;

    if (document.querySelector('div.container.documentation')) {
        DOCS_CONTAINER = document.querySelector('div.container.documentation');
        isDocsContainerAvailable = true;
    }
    if (document.querySelector('div.container.header__container')) {
        HEADER_CONTAINER = document.querySelector('div.container.header__container');
        isHeaderContainerAvailable = true;
    }

    function setGridClass() {
        if (window.innerWidth <= 1199) {
            if (isDocsContainerAvailable) {
                DOCS_CONTAINER.classList.remove('container');
                DOCS_CONTAINER.classList.add('container-fluid');
            }
            if (isHeaderContainerAvailable) {
                HEADER_CONTAINER.classList.remove('container');
                HEADER_CONTAINER.classList.add('container-fluid');
            }
        } else {
            if (isDocsContainerAvailable) {
                DOCS_CONTAINER.classList.remove('container-fluid');
                DOCS_CONTAINER.classList.add('container');
            }
            if (isHeaderContainerAvailable) {
                HEADER_CONTAINER.classList.remove('container-fluid');
                HEADER_CONTAINER.classList.add('container');
            }
        }
    }
    setGridClass();

    window.addEventListener('resize', _.debounce(setGridClass, 250));
};
