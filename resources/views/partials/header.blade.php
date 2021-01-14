@php
    isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = '';
    isset(Route::current()->parameters()["year"]) ? $year = Route::current()->parameters()["year"] : $year = '';
@endphp
<header class="header">
    <div class="container header__container">
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <a href="/"><img class="header__logo" src="/img/CaseWare_logo_4C_horz.svg" alt="CaseWare logo"></a>
            </div>
            <div class="header__input-search-wrapper">
                <form method="GET" action="/new-search">
                    <input type="text" name="search" placeholder="{{ __('strings.search') }}" autocomplete="off">
                    <input type="hidden" name="lang" value={{$lang}}>
                    <input type="hidden" name="year" value={{$year}}>
                </form>
            </div>
            <div class="header__nav-wrap">
                @if(strpos(Request::url(), '/SE-Authoring/') == false)
                @include('partials.nav')
                @endif
            </div>
        </div>
    </div>
</header>