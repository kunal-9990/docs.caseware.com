module.exports = () => {
    const HELPFUL_REASON_BTN = document.querySelectorAll('.was-this-helpful-btn ');

    HELPFUL_REASON_BTN.forEach((btn) => {
        btn.addEventListener('click', () => {
            HELPFUL_REASON_BTN.forEach((el) => {
                el.classList.remove('feedback-given');
            });

            btn.classList.add('feedback-given');
        });
    });
};
