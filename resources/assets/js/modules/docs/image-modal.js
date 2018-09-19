module.exports = () => {
    const BODY = document.querySelector('body');
    const CONTENT_IMAGES = Array.from(document.querySelector('.toc-content').querySelectorAll('img'));
    const MODAL_OVERLAY = document.querySelector('.image-modal');
    const MODAL_IMAGE = document.querySelector('.image-modal').querySelector('img.image-modal__img');
    const MODAL_CLOSE = document.querySelector('.image-modal__close');
    const FILTERED_IMAGES = filterImages(CONTENT_IMAGES);

    // filter out any images that are icons or CW logos
    function filterImages(imgs) {
        return imgs.filter(img => img.src.search('Icons') === -1 && img.src.search('CaseWare_Logos') === -1);
    }

    function toggleImgModalOverLay() {
        BODY.classList.contains('image-modal--shown')
            ? BODY.classList.remove('image-modal--shown')
            : BODY.classList.add('image-modal--shown');
    }

    // adds/updates the image src to the img inside the modal
    function setImgSrc(img) {
        MODAL_IMAGE.setAttribute('src', img.getAttribute('src'));
        toggleImgModalOverLay();
    }

    // close modal
    function closeModal(e) {
        if (BODY.classList.contains('image-modal--shown')) {
            if (e.target === MODAL_CLOSE || e.target === MODAL_OVERLAY) {
                toggleImgModalOverLay();
            }
        }
    }

    // event listener for all images inside the content
    FILTERED_IMAGES.forEach((img) => {
        img.addEventListener('click', () => setImgSrc(img));
    });

    window.addEventListener('click', event => closeModal(event));
};
