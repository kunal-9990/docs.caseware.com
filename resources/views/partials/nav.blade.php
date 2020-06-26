
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
        $currentLanguage = $languages[Request::segments()[1]];
    }
    @endphp
    <a href="#"><i class="fas fa-globe-americas"></i> {{$currentLanguage}} <i class="fas fa-angle-down"></i></a>
    <div class="dropdown-content">
        <a href="{{ $enLink }}">English</a>
        <a href="{{ $frLink }}">French</a>
        <a href="{{ $esLink }}">Spanish</a>
        <a href="{{ $nlLink }}">Dutch</a>
        <a href="{{ $cnLink }}">Chinese</a>
        <a href="{{ $deLink }}">German</a>
    </div>
</div>



<div class="region__dropdown dropdown">
    @php
    $languages = array("en"=>"EN", "fr"=>"FR", "es"=>"ES", "nl"=>"NL","cn"=>"CN", "de"=>"DE");
    $segments = Request::segments();
    // dd(Request::segments()); 
    $segments[1] = 'ca';
    $caLink = '/' . implode('/', $segments);
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
        $currentLanguage = $languages[Request::segments()[5]];
    }
    else {
        $currentLanguage = $languages[Request::segments()[1]];
    }
    @endphp
    <a href="#"><i class="fas fa-globe-americas"></i> {{$currentLanguage}} <i class="fas fa-angle-down"></i></a>
    <div class="dropdown-content">
        <a href="{{ $caLink }}">HELLO</a>
        <a href="{{ $frLink }}">French</a>
        <a href="{{ $esLink }}">Spanish</a>
        <a href="{{ $nlLink }}">Dutch</a>
        <a href="{{ $cnLink }}">Chinese</a>
        <a href="{{ $deLink }}">German</a>
    </div>
</div>
