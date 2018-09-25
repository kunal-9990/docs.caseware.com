module.exports = () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    const windowInnerHeight = window.innerHeight;
    const windowFullClientHeight = document.body.clientHeight;
    const isLongerThanThreeViewports = windowFullClientHeight >= (windowInnerHeight * 3);

    backToTopBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    function isBackToTopShown() {
        isLongerThanThreeViewports && document.documentElement.scrollTop > windowInnerHeight
            ? backToTopBtn.classList.add('back-to-top--is-shown')
            : backToTopBtn.classList.remove('back-to-top--is-shown');
    }
    isBackToTopShown();

    window.addEventListener('scroll', _.debounce(isBackToTopShown, 250));
};
