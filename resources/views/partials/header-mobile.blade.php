@php
isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = 'en';
isset(Route::current()->parameters()["year"]) ? $year = Route::current()->parameters()["year"] : $year = '2020';
isset(Route::current()->parameters()["category"]) ? $category = Route::current()->parameters()["category"] : $category =
'';
@endphp
<header class="header-mobile">
    <span class="glyphicon glyphicon-menu-hamburger header-mobile__nav-toggle" aria-hidden="true"></span>
    <div>
        <img class="header-mobile__logo" src="/img/CaseWare_logo_4C_horz.svg" alt="CaseWare Cloud logo">
    </div>
    <div class="header-mobile__input-search-wrapper">

        <form method="GET" action="/new-search">
            <input type="text" name="search" placeholder="{{ __('strings.search') }}" autocomplete="off">
            <input type="hidden" name="lang" value={{$lang}}>
            <input type="hidden" name="year" value={{$year}}>
            <input type="hidden" name="category" value={{$category}}>
        </form>
        <span class="glyphicon glyphicon-remove header-mobile__close-search header-mobile__search--js"
            aria-hidden="true"></span>
    </div>
    <span class="glyphicon glyphicon-search header-mobile__open-search header-mobile__search--js"
        aria-hidden="true"></span>
</header>

{{-- mobile overlay & nav(TOC) --}}
<div class="mobile-nav__wrapper">
    <div class="mobile-nav">
        <div class="mobile-nav__close-bar-wrap">
            <span class="glyphicon glyphicon-chevron-left header-mobile__nav-toggle" aria-hidden="true"></span>
            @include('partials.nav')
        </div>
        <div class="mobile-nav__filters-wrap">
            @include('partials.filters', ['mobile' => true])
        </div>
        <div class="mobile-nav__toc">
            @include('partials.toc')
        </div>
    </div>
</div>