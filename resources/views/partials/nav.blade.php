@php
// $en = Route::current();
// $en = Route::current();
// $en->setParameter('lang', 'en');
// // dd($en->urir());
// $fr = Route::current();
// $fr->setParameter('lang', 'fr');
// $es = Route::current();
// $es->setParameter('lang', 'es');
// $nl = Route::current();
// $nl->setParameter('lang', 'nl');
// $cn = Route::current();
// $cn->setParameter('lang', 'cn');
// $de = Route::current();
// $de->setParameter('lang', 'de');

@endphp
<div class="language__dropdown">
    @php
    $languages = array("en"=>"English", "fr"=>"French", "es"=>"Spanish", "nl"=>"Dutch","cn"=>"Chinese", "de"=>"German");
    $segments = Request::segments();
    $segments[3] = 'en';
    $enLink = '/' . implode('/', $segments);
    $segments[3] = 'fr';
    $frLink = '/' . implode('/', $segments);
    $segments[3] = 'es';
    $esLink = '/' . implode('/', $segments);
    $segments[3] = 'nl';
    $nlLink = '/' . implode('/', $segments);
    $segments[3] = 'cn';
    $cnLink = '/' . implode('/', $segments);
    $segments[3] = 'de';
    $deLink = '/' . implode('/', $segments);
    $currentLanguage = $languages[Request::segments()[3]];
    @endphp
    <a href="#">{{$currentLanguage}} <i class="fas fa-angle-down"></i></a>
    <div class="dropdown-content">
        <a href="{{$enLink}}">English</a>
        <a href="{{$frLink}}">French</a>
        <a href="{{$esLink}}">Spanish</a>
        <a href="{{$nlLink}}">Dutch</a>
        <a href="{{$cnLink}}">Chinese</a>
        <a href="{{$deLink}}">German</a>
    </div>
</div>
<div class="filters__dropdown">
    <a href="#">Filters <i class="fas fa-angle-down"></i></a>
</div>