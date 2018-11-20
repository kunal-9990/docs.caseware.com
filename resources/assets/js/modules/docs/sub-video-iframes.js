module.exports = () => {
    const IFRAME = document.querySelectorAll('p #vidcenter');

    IFRAME.forEach((el) => {
        el.parentElement.classList.add('docs__sub-iframe-wrap');
    });
};
