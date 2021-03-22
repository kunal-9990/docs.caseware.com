@php
isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = 'en';
isset(Route::current()->parameters()["year"]) ? $year = Route::current()->parameters()["year"] : $year = '2020';
isset(Route::current()->parameters()["category"]) ? $category = Route::current()->parameters()["category"] : $category =
'';
@endphp
<header class="header-desktop">
    <div class="container header__container">
        {{-- <div class="row"> --}}
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <a @if(isset($link)) href={{$link}} @else href="{{$indexURL}}" @endif><img class="header__logo" 
                    
                    @if(!isset($logo))
                        src="/img/CaseWare_logo_4C_horz.svg"
                    @elseif($logo == "audit")
                        src="/img/CW-Audit-22.svg"
                    @elseif($logo == "working-papers")
                        src="/img/CW-wp-2020.svg"
                    @endif
                        alt="CaseWare logo"></a>
                @if(strpos(Request::url(), '/SE-Authoring/') == false)
                @include('partials.nav')
                @endif
            </div>
            <div class="header__input-search-wrapper">
                <form method="GET" action="/new-search">
                    <input type="text" name="search" placeholder="{{ __('strings.search') }}" autocomplete="off">
                    <input type="hidden" name="lang" value={{$lang}}>
                    <input type="hidden" name="year" value={{$year}}>
                    <input type="hidden" name="category" value={{$category}}>
                </form>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="expanded-filters">
            {{-- <div class="dropdown-content"> --}}
            @include('partials.filters', ['mobile' => false])
            {{-- </div> --}}
        </div>
    </div>
</header>