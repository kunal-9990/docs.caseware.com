@php 
$year = Route::current()->parameters()["year"];
$product = Route::current()->parameters()["product"];
$version = Route::current()->parameters()["version"];
$lang = Route::current()->parameters()["lang"];
$searchURL = route('search', [$year, $product, $version, $lang]);
$indexURL = route('category', [$year, $product, $version, $lang, 'webapps']);
@endphp
<header class="header">
    <div class="container header__container">
        {{-- <div class="row"> --}}
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <a href="{{$indexURL}}"><img class="header__logo" src="/img/caseware-cloud-logo.png" alt="CaseWare Cloud logo"></a>
                @include('partials.nav')
            </div>
            <div class="header__input-search-wrapper">
                <form method="GET" action="{{$searchURL}}">
                    <input type="text" name="search" placeholder="Search" autocomplete="off">
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
