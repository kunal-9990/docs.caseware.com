@php 
$region = Route::current()->parameters()["region"];
$lang = Route::current()->parameters()["lang"];
@endphp

<header class="header header--ghost">
    <div class="container header__container">
        {{-- <div class="row"> --}}
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <a href="/{{$region}}/{{$lang}}">
                    <img class="header__logo" src="/img/CaseWare_logo_RGB_horz_White.png" alt="CaseWare logo">
                </a>
                @if(strpos(Request::url(), '/SE-Authoring/') == false)
                    @include('partials.nav')
                @endif
            </div>
        </div>
    </div>
    <div class="container">
        <div class="expanded-filters">

        </div>
    </div>
</header>
