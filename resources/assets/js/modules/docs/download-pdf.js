module.exports = () => {
    const DOWNLOAD_LINKS = document.querySelectorAll('.downloadLink');
    const MODAL_OVERLAY = document.querySelector('.pdf-modal');
    const MODAL_CLOSE = document.querySelector('.pdf-modal__close');
    const BODY = document.querySelector('body');
    console.log(DOWNLOAD_LINKS);

    function togglePDFModalOverLay() {
        BODY.classList.contains('pdf-modal--shown')
            ? BODY.classList.remove('pdf-modal--shown')
            : BODY.classList.add('pdf-modal--shown');
    }

    // close modal
    function closeModal(e) {
        if (BODY.classList.contains('pdf-modal--shown')) {
            if (e.target === MODAL_OVERLAY || e.target === MODAL_CLOSE) {
                togglePDFModalOverLay();
            }
        }
    }

    DOWNLOAD_LINKS.forEach((link) => {
        // the two following lines are to remove
        // the bootstrap modal toggle data attrs
        link.removeAttribute('data-toggle');
        link.removeAttribute('data-target');

        link.addEventListener('click', (event) => {
            event.preventDefault();
            togglePDFModalOverLay();
        });
    });

    window.addEventListener('click', event => closeModal(event));
};
