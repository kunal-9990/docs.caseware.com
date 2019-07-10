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
    $languages = array("en"=>"EN", "fr"=>"FR", "es"=>"ES", "nl"=>"NL","cn"=>"CN", "de"=>"DE");
    $segments = Request::segments();
    $currentLanguage = $languages[Request::segments()[3]];
    foreach ($languages as $key => $language) {
        $segments[3] = $key;
        ${$key . 'Link'} = '/' . implode('/', $segments);
        ${$key . 'TranslatedFile'} = env('PATH_TO_PUBLIC') . 'documentation_files/' . implode('/', array_slice($segments, 0, 3)) . '/Content/en/Resources/TranslatedDocs/' . strtoupper($segments[3]) . '/' . ($segments[5] != 'TranslatedDocs' ? $segments[6] : $segments[7]);
        if ($segments[5] != 'TranslatedDocs') {
            if (isset($exclusiveTo) && $exclusiveTo != '' && file_exists(${$key . 'TranslatedFile'})) {
                ${$key . 'Link'} = '/' . implode('/', array_slice($segments, 0, 3)) . '/en/Resources/TranslatedDocs/' . strtoupper($key) . '/' . $segments[6];
            }
        } else {
            $currentLanguage = $languages[strtolower(Request::segments()[6])];
            if (file_exists(${$key . 'TranslatedFile'})) {
                ${$key . 'Link'} = '/' . implode('/', array_slice($segments, 0, 3)) . '/en/Resources/TranslatedDocs/' . strtoupper($key) . '/' . $segments[7];
            } else {
                ${$key . 'Link'} = '/' . implode('/', array_slice($segments, 0, 3)) . '/' . $key . '/Setup/Licenses/' . $segments[7];
            }
        }
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
<div class="filters__dropdown">
    <a href="#"><i class="fas fa-filter"></i> {{ __('strings.products') }} <i class="fas fa-angle-down"></i></a>
</div>