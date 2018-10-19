module.exports = () => {
    const HELPFUL_REASON_BTN = document.querySelectorAll('.was-this-helpful-btn ');
    const NOT_HELPFUL_BTN = document.querySelector('.was-this-helpful-no');
    const WAS_HELPFUL_BTN = document.querySelector('.was-this-helpful-yes');
    const NOT_HELPFUL_DROPDOWN = document.querySelector('.was-this-helpful-no-reason-dropdown');
    const NOT_HELPFUL_REASON = document.querySelectorAll('input[name=was-this-helpful-no-reason]');
    
    // variable for the ga script object
    let FEEDBACK = null; // eslint-disable-line

    function informationWasHelpful() {
        // build the ga object here
        FEEDBACK = 'info was helpful';
    }

    function informationWasNotHelpful(reason) {
        // build the ga object here
        FEEDBACK = `is not helpful: ${reason}`;
        hideNoReasonDropdown();
    }

    function hideNoReasonDropdown() {
        NOT_HELPFUL_DROPDOWN.classList.remove('is-expanded');
    }

    window.addEventListener('beforeunload', () => {
        // fire ga script with built object FEEDBACK
        ga('global.send', 'event', FEEDBACK, 'User Feedback', window.location.href);
        ga('caseware.send', 'event', FEEDBACK, 'User Feedback', window.location.href);
    });

    NOT_HELPFUL_REASON.forEach((input) => {
        input.addEventListener('click', (event) => {
            const reason = event.target.getAttribute('value');
            informationWasNotHelpful(reason);
        });
    });

    NOT_HELPFUL_BTN.addEventListener('click', () => {
        NOT_HELPFUL_DROPDOWN.classList.toggle('is-expanded');
    });

    HELPFUL_REASON_BTN.forEach((btn) => {
        btn.addEventListener('click', () => {
            HELPFUL_REASON_BTN.forEach((el) => {
                el.classList.remove('feedback-given');
            });

            if (btn === WAS_HELPFUL_BTN) {
                hideNoReasonDropdown();
                informationWasHelpful();
            }

            btn.classList.add('feedback-given');
        });
    });
};
