@php
isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = '';
isset(Route::current()->parameters()["region"]) ? $region = Route::current()->parameters()["region"] : $region = '';
isset(Route::current()->parameters()["version"]) ? $version = Route::current()->parameters()["version"] : $version = '';
(null !== Request::input('region')) ? $tocregion = Request::input('region') : $tocregion = 'int';

//array to identify region & language together for dropdown
$region_array = [
    "ca"=> "Canada",
    "us"=> "US",
    "int"=> "International"
];
$lang_array = [
    "en"=> "English",
    "fr"=> "Français",
    "de"=> "Deutsch",
    "nl"=> "Nederlands"
];
$selected_option = ($lang_array[$lang])." (".$region_array[$tocregion].")";
if($lang == "de") {
    $selected_option = str_replace('(International)','', $selected_option);
}

//list of URLs for the dropdown options 
$ca_en = Request::path();
$us_en = Request::path();
$int_en = Request::path();
$ca_fr = Request::path();
$int_nl = Request::path();
$int_de = Request::path();

@endphp
<div class="nav-container">
    {{-- region is controlled via query string on topic pages and controlled using a route parameter on cms pages. checking the version tells us whether
we're on a topic page or cms page as only topic pages have the version in the url. display the region dropdown accordingly: --}}

    {{-- on topic pages --}}
    @if(!empty($version))
        @php
        $ca_en = str_replace('/'.$lang ,'/en', $ca_en);
        $ca_en.="?region=ca";
        $us_en = str_replace('/'.$lang ,'/en', $us_en);
        $us_en.="?region=us";
        $int_en = str_replace('/'.$lang ,'/en', $int_en);
        $int_en.="?region=int";
        $ca_fr = str_replace('/'.$lang ,'/fr', $ca_fr);
        $ca_fr.="?region=ca";
        $int_nl = str_replace('/'.$lang ,'/nl', $int_nl);
        $int_nl.="?region=int";
        $int_de = str_replace('/'.$lang ,'/de', $int_de);
        $int_de.="?region=int";
        @endphp
        <div class="language__dropdown dropdown">
            <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{$selected_option}}</span> <i class="fas fa-angle-down"></i></a>
            <div class="dropdown-content">
                <a href="/{{ $ca_en }}"> English (Canada) </a>
                <a href="/{{ $us_en }}"> English (US) </a>
                <a href="/{{ $int_en }}"> English (International) </a>
                <a href="/{{ $ca_fr }}"> Français (Canada) </a>
                <a href="/{{ $int_nl }}"> Nederlands (Nederland) </a>
                <a href="/{{ $int_de }}"> Deutsch </a>
            </div>
        </div>

    <!-- <div class="language__dropdown dropdown">
        <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{strtoupper($tocregion)}}</span> <i class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="?region=ca">Canada</a>
            <a href="?region=us">US</a>
            <a href="?region=int">International</a>
        </div>
    </div> -->
    {{-- on cms pages --}}
    @else
    @php
        $ca_en = str_replace('/'.$lang ,'/en', $ca_en);
        $ca_en = str_replace($region.'/' , 'ca/', $ca_en);
        $us_en = str_replace('/'.$lang ,'/en', $us_en);
        $us_en = str_replace($region.'/' , 'us/', $us_en);
        $int_en = str_replace('/'.$lang ,'/en', $int_en);
        $int_en = str_replace($region.'/' , 'int/', $int_en);
        $ca_fr = str_replace('/'.$lang ,'/fr', $ca_fr);
        $ca_fr = str_replace($region.'/' , 'ca/', $ca_fr);
        $int_nl = str_replace('/'.$lang ,'/nl', $int_nl);
        $int_nl = str_replace($region.'/' , 'int/', $int_nl);
        $int_de = str_replace('/'.$lang ,'/de', $int_de);
        $int_de = str_replace($region.'/' , 'int/', $int_de);
    @endphp
        <div class="language__dropdown dropdown">
            <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{$selected_option}}</span> <i class="fas fa-angle-down"></i></a>
            <div class="dropdown-content">
                <a href="/{{ $ca_en }}"> English (Canada) </a>
                <a href="/{{ $us_en }}"> English (US) </a>
                <a href="/{{ $int_en }}"> English (International) </a>
                <a href="/{{ $ca_fr }}"> Français (Canada) </a>
                <a href="/{{ $int_nl }}"> Nederlands (Nederland) </a>
                <a href="/{{ $int_de }}"> Deutsch </a>
            </div>
        </div>

    <!-- <div class="region__dropdown dropdown">
        <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{strtoupper($region)}}</span> <i class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="/{{ str_replace($region.'/' , 'int/', Request::path()) }}">International</a>
            <a href="/{{ str_replace($region.'/' , 'ca/', Request::path()) }}">Canada</a>
            <a href="/{{ str_replace($region.'/' , 'us/', Request::path()) }}"><span class="notranslate">US</span></a>
            <a href="/{{ str_replace($region.'/' , 'nl/', Request::path()) }}"><span class="notranslate">NL</span></a>
        </div>
    </div> -->
    @endif
    <!-- @if(!empty($lang)) -->
    <!-- <div class="language__dropdown dropdown">
        <a href="#"><i class="fas fa-language"></i> <span class="notranslate">{{strtoupper($lang)}}</span> <i
                class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="/{{ str_replace('/'.$lang ,'/en', Request::path()) }}">English</a>
            <a href="/{{ str_replace('/'.$lang ,'/fr', Request::path()) }}">French</a>
            <a href="/{{ str_replace('/'.$lang ,'/es', Request::path()) }}">Spanish</a>
            <a href="/{{ str_replace('/'.$lang ,'/nl', Request::path()) }}">Dutch</a>
            <a href="/{{ str_replace('/'.$lang ,'/cn', Request::path()) }}">Chinese</a>
            <a href="/{{ str_replace('/'.$lang ,'/de', Request::path()) }}">German</a>
        </div>
    </div> -->
    <!-- @endif -->
</div>