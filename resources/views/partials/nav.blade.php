@php
    isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = '';
    isset(Route::current()->parameters()["region"]) ? $region = Route::current()->parameters()["region"] : $region = '';
    isset(Route::current()->parameters()["version"]) ? $version = Route::current()->parameters()["version"] : $version = '';
    (null !== Request::input('region')) ? $tocregion = Request::input('region') : $tocregion = 'int';
@endphp
<div class="nav-container">
{{-- region is controlled via query string on topic pages and controlled using a route parameter on cms pages. checking the version tells us whether
we're on a topic page or cms page as only topic pages have the version in the url. display the region dropdown accordingly: --}}

{{-- on topic pages --}}
@if(!empty($version))
<div class="language__dropdown dropdown">
        <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{strtoupper($tocregion)}}</span> <i
                class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="?region=ca">Canada</a>
            <a href="?region=us">US</a>
            <a href="?region=int">International</a>
            <a href="?region=nl">Netherlands</a>
        </div>
</div>
{{-- on cms pages --}}
@else
<div class="region__dropdown dropdown">
        <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{strtoupper($region)}}</span> <i
                class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="/{{ str_replace($region.'/' , 'int/', Request::fullUrl()) }}">International</a>
            <a href="/{{ str_replace($region.'/' , 'ca/', Request::fullUrl()) }}">Canada</a>
            <a href="/{{ str_replace($region.'/' , 'us/', Request::fullUrl()) }}"><span class="notranslate">US</span></a>
            <a href="/{{ str_replace($region.'/' , 'nl/', Request::fullUrl()) }}"><span class="notranslate">NL</span></a>
        </div>
</div>
@endif
@if(!empty($lang))
    <div class="language__dropdown dropdown">
        <a href="#"><i class="fas fa-language"></i> <span class="notranslate">{{strtoupper($lang)}}</span> <i class="fas fa-angle-down"></i></a>
        <div class="dropdown-content">
            <a href="/{{ str_replace('/'.$lang ,'/en', Request::fullUrl()) }}">English</a>
            <a href="/{{ str_replace('/'.$lang ,'/fr', Request::fullUrl()) }}">French</a>
            <a href="/{{ str_replace('/'.$lang ,'/es', Request::fullUrl()) }}">Spanish</a>
            <a href="/{{ str_replace('/'.$lang ,'/nl', Request::fullUrl()) }}">Dutch</a>
            <a href="/{{ str_replace('/'.$lang ,'/cn', Request::fullUrl()) }}">Chinese</a>
            <a href="/{{ str_replace('/'.$lang ,'/de', Request::fullUrl()) }}">German</a>
        </div>
    </div>
@endif
</div>
