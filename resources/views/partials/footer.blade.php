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
                    <img class="footer__logo" src="/img/CaseWare_logo_RGB_horz_White.png" class="footerlogo" alt="CaseWare logo" />
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
            <!-- @foreach($footer as $parent)
            <div class="col">
                <span><?=$parent->title?></span>
                @foreach($parent->child_items as $children)
                <a href="<?=$children->url?>" target="_blank"><?=$children->title?></a>
                @endforeach
            </div>
            @endforeach -->

                <div class="col">
                    <span>Products</span>
                    <a>CaseWare Working Papers</a>
                    <a>CaseWare Cloud</a>
                    <a>IDEA</a>
                    <a>CaseWare Audit</a>
                    <a>CaseWare Financials</a>
                </div>
                <div class="col">
                    <span>About</span>
                    <a>Who we are</a>
                    <a>Where you fit</a>
                    <a>Certifications</a>
                </div>
                <div class="col">
                    <span>Resources</span>
                    <a>Articles</a>
                    <a>Webinars</a>
                </div>
                <div class="col">
                    <span>Support</span>
                    <span>Training</span>
                    <span>Distributors</span>
                    <span>Events</span>
                    <span>MyCaseWare</span>
                </div>
                <div class="col">
                    <span>Contact</span>
                    <div>
                        CaseWare International Inc.<br />
                        1 Toronto St, Suite 1400<br />
                        Toronto, ON M5C 2V6 (Canada)<br />
                        <a href="tel:14168679504">Tel: 416-867-9504</a><br />
                        <a href="tel:14168671906">Fax: 416-867-1906</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__copyright">
        <p class="">Copyright &copy; <?=date('Y');?> CaseWare International</p>
    </div>
</footer>