module.exports = () => {
    const HELPFUL_REASON_BTN = document.querySelectorAll('.was-this-helpful-btn ');
    const NOT_HELPFUL_BTN = document.querySelector('.was-this-helpful-no');
    const WAS_HELPFUL_BTN = document.querySelector('.was-this-helpful-yes');
    const NOT_HELPFUL_DROPDOWN = document.querySelector('.was-this-helpful-no-reason-dropdown');
    const NOT_HELPFUL_REASON = document.querySelectorAll('input[name=was-this-helpful-no-reason]');

    // variable for the feedback
    let FEEDBACK = null; // eslint-disable-line

    // Track when the information was helpful
    function informationWasHelpful() {
        FEEDBACK = 'info was helpful';
        sendFeedbackEvent('helpful', 'User Feedback', window.location.href);
    }

    // Track when the information was not helpful and capture the reason
    function informationWasNotHelpful(reason) {
        FEEDBACK = `is not helpful: ${reason}`;
        sendFeedbackEvent('not_helpful', reason, window.location.href);
        hideNoReasonDropdown();
    }

    // Hide the reason dropdown for 'not helpful'
    function hideNoReasonDropdown() {
        NOT_HELPFUL_DROPDOWN.classList.remove('is-expanded');
    }

    // Function to send the event to GA4
    function sendFeedbackEvent(feedbackType, feedbackValue, pageUrl) {
        gtag('event', 'user_feedback', {
            'event_category': 'Feedback',  // Event category
            'event_label': pageUrl,        // Event label (current page URL)
            'feedback_type': feedbackType, // Custom parameter for helpful or not helpful
            'feedback_value': feedbackValue, // Custom parameter for the feedback value or reason
            'page_location': pageUrl // You can also track the page location separately
        });
    }

    window.addEventListener('beforeunload', () => {
        // Send the feedback event when the page is unloaded
        if (FEEDBACK) {
            sendFeedbackEvent(FEEDBACK, 'User Feedback', window.location.href);
        }
    });

    // Attach event listeners for reasons (when user clicks "not helpful" reasons)
    NOT_HELPFUL_REASON.forEach((input) => {
        input.addEventListener('click', (event) => {
            const reason = event.target.getAttribute('value');
            informationWasNotHelpful(reason);
        });
    });

    // Attach event listener for the "No" button to show the dropdown
    NOT_HELPFUL_BTN.addEventListener('click', () => {
        NOT_HELPFUL_DROPDOWN.classList.toggle('is-expanded');
    });

    // Attach event listeners for the feedback buttons ("Yes" or "No")
    HELPFUL_REASON_BTN.forEach((btn) => { 
        btn.addEventListener('click', () => {
            // Remove the 'feedback-given' class from all buttons
            HELPFUL_REASON_BTN.forEach((el) => {
                el.classList.remove('feedback-given');
            });

            // Track whether the feedback is helpful or not and hide dropdown if applicable
            if (btn === WAS_HELPFUL_BTN) {
                hideNoReasonDropdown();
                informationWasHelpful();
            }

            btn.classList.add('feedback-given');
        });
    });
};
