@php
    isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = '';
    isset(Route::current()->parameters()["region"]) ? $region = Route::current()->parameters()["region"] : $region = '';
    (null !== Request::input('region')) ? $tocregion = Request::input('region') : $tocregion = 'int';
@endphp
<div class="nav-container">
@if(!empty($region))
    <div class="region__dropdown dropdown">
        <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{strtoupper($region)}}</span> <i class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="/{{ str_replace($region.'/' , 'int/', Request::path()) }}">International</a>
            <a href="/{{ str_replace($region.'/' , 'ca/', Request::path()) }}">Canada</a>
            <a href="/{{ str_replace($region.'/' , 'us/', Request::path()) }}"><span class="notranslate">US</span></a>
            <a href="/{{ str_replace($region.'/' , 'nl/', Request::path()) }}"><span class="notranslate">NL</span></a>
        </div>
    </div>
@endif
@if(!empty($lang))
    <div class="language__dropdown dropdown">
        <a href="#"><i class="fas fa-language"></i> <span class="notranslate">{{strtoupper($lang)}}</span> <i class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="/{{ str_replace('/'.$lang ,'/en', Request::path()) }}">English</a>
            <a href="/{{ str_replace('/'.$lang ,'/fr', Request::path()) }}">French</a>
            <a href="/{{ str_replace('/'.$lang ,'/es', Request::path()) }}">Spanish</a>
            <a href="/{{ str_replace('/'.$lang ,'/nl', Request::path()) }}">Dutch</a>
            <a href="/{{ str_replace('/'.$lang ,'/cn', Request::path()) }}">Chinese</a>
            <a href="/{{ str_replace('/'.$lang ,'/de', Request::path()) }}">German</a>
        </div>
    </div>
@endif
@if(!empty($lang))
    <div class="language__dropdown dropdown">
        <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{strtoupper($tocregion)}}</span> <i class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="?region=ca">Canada</a>
            <a href="?region=us">US</a>
            <a href="?region=int">International</a>
            <a href="?region=nl">Netherlands</a>
        </div>
    </div>
@endif
</div>
