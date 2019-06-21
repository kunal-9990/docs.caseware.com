<div class="was-this-helpful">
    <p class="was-this-helpful-question-text">{{ __('strings.was_this_helpful') }}</p>
    <a class="was-this-helpful-btn was-this-helpful-yes">{{ __('strings.yes') }}</a>

    <div class="was-this-helpful-no-reason-menu">
        <a class="was-this-helpful-btn was-this-helpful-no">{{ __('strings.no') }}</a>
        <div class="was-this-helpful-no-reason-dropdown">
            <form>
                <radiogroup>
                    <div class="reason-radio-box"> 
                        <label><input type="radio" name="was-this-helpful-no-reason" value="It wasn't accurate" class="feedback-given"> {{ __('strings.it_wasnt_accurate') }}</label>
                    </div>

                    <div class="reason-radio-box">
                        <label><input type="radio" name="was-this-helpful-no-reason" value="It wasn't clear" class="feedback-given"> {{ __('strings.it_wasnt_clear') }}</label>
                    </div>

                    <div class="reason-radio-box">
                        <label><input type="radio" name="was-this-helpful-no-reason" value="It wasn't relevant" class="feedback-given"> {{ __('strings.it_wasnt_relevant') }}</label>
                    </div>
                </radiogroup>
            </form>
        </div>
    </div>
</div>