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
                <a href="https://www.linkedin.com/groups/1935174/profile"><i class="fab fa-linkedin"></i></a>
                <a href="http://www.facebook.com/pages/CaseWare-International-Inc/54418196590?ref=ts"><i class="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/CaseWare"><i class="fab fa-twitter-square"></i></a>
                <a href="http://www.youtube.com/user/casewarevids?feature=results_main"><i class="fab fa-youtube-square"></i></a>
            </div>
        </div>
        <div class="row footer__links">
            <div class="col-sm-12">

        <!-- TODO un hardcode -->
           

                <div class="col">
                    <span>{{ __('strings.footer_link_about') }}</span>
                    <a href="https://www.caseware.com/ca/about" target="_blank" rel="noopener">{{ __('strings.footer_link_who_we_are') }}</a>
                    <a href="https://www.caseware.com/ca/careers" target="_blank" rel="noopener">{{ __('strings.footer_link_where_you_fit') }}</a>
                    <a href="https://www.caseware.com/security-certifications/" target="_blank" rel="noopener">{{ __('strings.footer_link_certifications') }}</a>
                </div>
                <div class="col stretch">
                    <span>{{ __('strings.footer_link_legal') }}</span>
                    <!-- <a href="https://www.caseware.com/generic/privacy-policy-caseware-international" target="_blank" rel="noopener">CaseWare International Privacy Policy</a> -->
                    <a href="https://www.caseware.com/privacy-statement/" target="_blank" rel="noopener">{{ __('strings.footer_link_caseware_cloud_privacy_policy') }}</a>
                    <a href="https://www.caseware.com/terms-of-use/" target="_blank" rel="noopener">{{ __('strings.footer_link_terms_of_use') }}</a>
                    <a href="https://docs.caseware.com/latest/webapps/{{ $lang }}/Setup/Licenses/CaseWare-Cloud-Services-Agreement.htm" rel="noopener">{{ __('strings.footer_link_cloud_services_agreement') }}</a>
                    <a href="https://docs.caseware.com/latest/webapps/en/Setup/Licenses/CaseWare-Cloud-Services-Agreement.htm?region=int" target="_blank" rel="noopener">{{ __('strings.footer_link_cloud_service_level_agreement') }}</a>
                </div>
                <div class="col">
                    <span>{{ __('strings.footer_link_resources') }}</span>
                    <a href="https://www.caseware.com/ca/support" target="_blank" rel="noopener">{{ __('strings.footer_link_support') }}</a>
                    <a href="https://www.caseware.com/ca/training" target="_blank" rel="noopener">{{ __('strings.footer_link_training') }}</a>
                    <a href="https://www.caseware.com/ca/distributors" target="_blank" rel="noopener">{{ __('strings.footer_link_distributors') }}</a>
                    <a href="https://my.caseware.com/account/login?ReturnUrl=%2F" target="_blank" rel="noopener">{{ __('strings.footer_link_mycaseware') }}</a>
                </div>
                <div class="col stretch contact">
                    <span>{{ __('strings.footer_link_contact') }}</span>
                    <div>
                        {{ __('strings.footer_address') }}
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
