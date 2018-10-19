module.exports = () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    const windowInnerHeight = window.innerHeight;
    const windowFullClientHeight = document.body.clientHeight;
    const isLongerThanThreeViewports = windowFullClientHeight >= (windowInnerHeight * 3);

    backToTopBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    // show the back-to-top btn if the total page length is greater
    // than x3 viewport height && is scrolled beyond the "above the fold" content
    // also hides the btn if user is scrolled to the bottom to not overlay the footer
    function isBackToTopShown() {
        isLongerThanThreeViewports && document.documentElement.scrollTop > windowInnerHeight
            ? backToTopBtn.classList.add('back-to-top--is-shown')
            : backToTopBtn.classList.remove('back-to-top--is-shown');

        if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight - 2) {
            backToTopBtn.classList.remove('back-to-top--is-shown');
        }
    }
    isBackToTopShown();

    window.addEventListener('scroll', _.debounce(isBackToTopShown, 75));
};
