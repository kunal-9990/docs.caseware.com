<header class="header-mobile">
        <span class="glyphicon glyphicon-menu-hamburger header-mobile__nav-toggle" aria-hidden="true"></span>
        <div>
            <img class="header-mobile__logo" src="/img/caseware-cloud-logo.png" alt="CaseWare Cloud logo">
        </div>
        <div class="header-mobile__input-search-wrapper">
            <input type="text" placeholder="Search">
            <span class="glyphicon glyphicon-remove header-mobile__close-search header-mobile__search--js" aria-hidden="true"></span>
        </div>
        <span class="glyphicon glyphicon-search header-mobile__open-search header-mobile__search--js" aria-hidden="true"></span>
</header>

{{-- mobile overlay & nav(TOC) --}}
<div class="mobile-nav__wrapper">
    <div class="mobile-nav">
        <div class="mobile-nav__close-bar-wrap">
            <span class="glyphicon glyphicon-chevron-left header-mobile__nav-toggle" aria-hidden="true"></span>
        </div>
        <div class="mobile-nav__toc">
            @include('partials.toc')
        </div>
    </div>
</div>