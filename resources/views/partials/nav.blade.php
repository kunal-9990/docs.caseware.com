
<div class="language__dropdown dropdown">
    @php
    $languages = array("en"=>"EN", "fr"=>"FR", "es"=>"ES", "nl"=>"NL","cn"=>"CN", "de"=>"DE");
    $segments = Request::segments();
    // dd(Request::segments()); 
    $segments[1] = 'en';
    $enLink = '/' . implode('/', $segments);
    $segments[1] = 'fr';
    $frLink = '/' . implode('/', $segments);
    $segments[1] = 'es';
    $esLink = '/' . implode('/', $segments);
    $segments[1] = 'nl';
    $nlLink = '/' . implode('/', $segments);
    $segments[1] = 'cn';
    $cnLink = '/' . implode('/', $segments);
    $segments[1] = 'de';
    $deLink = '/' . implode('/', $segments);
    if(strpos(Request::url(), '/search/') == true || strpos(Request::url(), '/se-search/') == true) {
        $currentLanguage = $languages[Request::segments()[4]];
    }
    else {
        // $currentLanguage = $languages[Request::segments()[1]];
        isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = 'Language';
    }
    @endphp
    <a href="#"><i class="fas fa-globe-americas"></i> {{$lang}} <i class="fas fa-angle-down"></i></a>
    <div class="dropdown-content">
        <a href="{{ str_replace('/'.$lang.'/','en', Request::path()) }}">English</a>
        <a href="{{ $frLink }}">French</a>
        <a href="{{ $esLink }}">Spanish</a>
        <a href="{{ $nlLink }}">Dutch</a>
        <a href="{{ $cnLink }}">Chinese</a>
        <a href="{{ $deLink }}">German</a>
    </div>
</div>



<div class="region__dropdown dropdown">
    @php
    $regions = array("ca"=>"CA", "us"=>"US");
    $segments = Request::segments();
    // dd(Request::segments()); 
    $segments[0] = 'ca';
    $caLink = '/' . implode('/', $segments);
    $segments[0] = 'us';
    $usLink = '/' . implode('/', $segments);

    if(strpos(Request::url(), '/search/') == true || strpos(Request::url(), '/se-search/') == true) {
        $currentRegion = $regions[Request::segments()[3]];
    }
    else {
        // $currentRegion = $regions[Request::segments()[0]];
        isset(Route::current()->parameters()["region"]) ? $region = Route::current()->parameters()["region"] : $region = 'Region';
    }
    @endphp
    <a href="#">
        <i class="fas fa-globe-americas"></i> {{$region}} <i class="fas fa-angle-down"></i>
    </a>
    <div class="dropdown-content">
        <a href="{{ $caLink }}">Canada</a>
        <a href="{{ $usLink }}">US</a>
    </div>
</div>
