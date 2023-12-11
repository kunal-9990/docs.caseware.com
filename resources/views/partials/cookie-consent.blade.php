@if(!isset($_COOKIE['cookie-consent']))
<div class="cookie">
  <div class="container">
    <div class="cookie__wrapper">
      <div>
        <h2>{{ trans('strings.cookie_header') }}</h2>
        <p>{{ __('strings.cookie_notice') }}</p>
      </div>
      <div>
        <div class="cookie__btn">
          <span>{{ __('strings.cookie_button_text') }}</span>
        </div>
      </div>
    </div>
  </div>
</div>
@endif