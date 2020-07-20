@php 
$year = Route::current()->parameters()["year"];
$product = Route::current()->parameters()["product"];
$version = Route::current()->parameters()["version"];
$lang = Route::current()->parameters()["lang"];
$searchroute = '';

if(strpos(Request::url(), '/SE-Authoring/') == true || strpos(Request::url(), '/se-search/') == true) {
    $searchroute = "se-search";
}
else {
    $searchroute = "search";
}

$searchURL = route($searchroute, [$year, $product, $version, $lang]);
$indexURL = route('category', [$year, $product, $version, $lang, 'webapps']);
@endphp
<header class="header">
    <div class="container header__container">
        {{-- <div class="row"> --}}
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <a href="/"><img class="header__logo" src="/img/CaseWare_logo_4C_horz.svg" alt="CaseWare logo"></a>
                @if(strpos(Request::url(), '/SE-Authoring/') == false)
                    @include('partials.nav')
                @endif
            </div>
            <div class="header__input-search-wrapper">
                <form method="GET" action="{{$searchURL}}">
                    <input type="text" name="search" placeholder="{{ __('strings.search') }}" autocomplete="off">
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
