@php 
isset(Route::current()->parameters()["year"]) ? $year = Route::current()->parameters()["year"] : $year = '';
isset(Route::current()->parameters()["product"]) ? $product = Route::current()->parameters()["product"] : $product = '';
isset(Route::current()->parameters()["version"]) ? $version = Route::current()->parameters()["version"] : $version = '';
isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = '';
isset(Route::current()->parameters()["region"]) ? $region = Route::current()->parameters()["region"] : $region = '';
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
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <a href="/"><img class="header__logo" src="/img/CaseWare_logo_4C_horz.svg"
                        alt="CaseWare logo"></a>
            </div>
            <div class="header__input-search-wrapper">
                <form method="GET" action="{{$searchURL}}">
                    <input type="text" name="search" placeholder="{{ __('strings.search') }}" autocomplete="off">
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