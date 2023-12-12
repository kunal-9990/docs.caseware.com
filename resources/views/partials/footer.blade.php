@php
    isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = 'en';
@endphp

<!-- <section class="newsletter">
    <div class="newsletter__container container">
        <h3>TODO - Newsletter Signup</h3>
    </div>
</section> -->
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col col-sm-6 col--sm-full">        
                <a href="https://www.caseware.com">
                    <img class="footer__logo" src="/img/CaseWare-Logo-RGB-Primary_Light-TM.png" class="footerlogo" alt="CaseWare logo" />
                </a>
            </div>
            <div class="col col-sm-6 col--sm-full footer__social-media">
                {!! __('strings.social_media_1') !!}
                {!! __('strings.social_media_2') !!}
                {!! __('strings.social_media_3') !!}
                {!! __('strings.social_media_4') !!}
            </div>
        </div>
        <div class="row footer__links">
            <div class="col-sm-12">

        <!-- TODO un hardcode -->
           

                <div class="col">
                    <span>{{ __('strings.footer_text_about') }}</span>
                    <a href="{{ __('strings.footer_href_who_we_are') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_who_we_are') }}</a>
                    <a href="{{ __('strings.footer_href_where_you_fit') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_where_you_fit') }}</a>
                    <a href="{{ __('strings.footer_href_certifications') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_certifications') }}</a>
                </div>
                <div class="col stretch">
                    <span>{{ __('strings.footer_text_legal') }}</span>
                    <!-- <a href="https://www.caseware.com/generic/privacy-policy-caseware-international" target="_blank" rel="noopener">CaseWare International Privacy Policy</a> -->
                    <a href="{{ __('strings.footer_href_caseware_cloud_privacy_policy') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_caseware_cloud_privacy_policy') }}</a>
                    <a href="{{ __('strings.footer_href_terms_of_use') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_terms_of_use') }}</a>
                    <a href="{{ __('strings.footer_href_cloud_services_agreement') }}" rel="noopener">{{ __('strings.footer_text_cloud_services_agreement') }}</a>
                    @if(({{ __('strings.footer_text_cloud_service_level_agreement') }}) !== "")
                    <a href="{{ __('strings.footer_href_cloud_service_level_agreement') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_cloud_service_level_agreement') }}</a>
                    @endif
                </div>
                <div class="col">
                    <span>{{ __('strings.footer_text_resources') }}</span>
                    <a href="{{ __('strings.footer_href_support') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_support') }}</a>
                    <a href="{{ __('strings.footer_href_training') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_training') }}</a>
                    <a href="{{ __('strings.footer_href_distributors') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_distributors') }}</a>
                    <a href="{{ __('strings.footer_href_mycaseware') }}" target="_blank" rel="noopener">{{ __('strings.footer_text_mycaseware') }}</a>
                </div>
                <div class="col stretch contact">
                    <span>{{ __('strings.footer_text_contact') }}</span>
                    <div>
                        {!! __('strings.footer_address') !!}
                        <a href="tel:14168679504">{{ __('strings.footer_telephone') }}</a>
                        <a href="tel:14168671906">{{ __('strings.footer_fax') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__copyright">
        <p class="">Copyright &copy; <?=date('Y');?> CaseWare International</p>
    </div>
</footer>
