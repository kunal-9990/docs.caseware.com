@php
isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = '';
isset(Route::current()->parameters()["region"]) ? $region = Route::current()->parameters()["region"] : $region = '';
isset(Route::current()->parameters()["version"]) ? $version = Route::current()->parameters()["version"] : $version = '';
(null !== Request::input('region')) ? $tocregion = Request::input('region') : $tocregion = 'int';
(null !== Request::input('search')) ? $searchparameter = Request::input('search') : $searchparameter = 'none';

//array to identify region & language together for dropdown
$region_array = [
    "ca"=> " (Canada)",
    "us"=> " (US)",
    "int"=> " (International)",
    "de"=> "",
    "nl"=> " (Nederland)",
    "es"=>""
];
$lang_array = [
    "en"=> "English",
    "fr"=> "Français",
    "de"=> "Deutsch",
    "nl"=> "Nederlands",
    "es"=> "Español"
];

echo "<script>console.log('Lang: ".$lang."'); </script>";
echo "<script>console.log('Region: ".$region."'); </script>";
echo "<script>console.log('Toc region: ".$tocregion."'); </script>";
echo "<script>console.log('searchparameter: ".$searchparameter."'); </script>";

//list of URLs for the dropdown options 
$ca_en = Request::path();
$us_en = Request::path();
$int_en = Request::path();
$ca_fr = Request::path();
$int_nl = Request::path();
$int_de = Request::path();
$int_es = Request::path();

@endphp
<div class="nav-container">
    {{-- region is controlled via query string on topic pages and controlled using a route parameter on cms pages. checking the version tells us whether we're on a topic page or cms page as only topic pages have the version in the url. display the region dropdown accordingly: --}}

    {{-- on topic pages --}}
    @if(!empty($version))
        @php
        
        //set the selected option text for the lang/region dropdown
        if($lang == "de" || $lang == "nl" || $lang == "es") {
            $selected_option = ((!empty($lang_array[$lang])) ? $lang_array[$lang] : '').((!empty($region_array[$lang])) ? $region_array[$lang] : '');
        } else {
            $selected_option = ((!empty($lang_array[$lang])) ? $lang_array[$lang] : '').((!empty($region_array[$tocregion])) ? $region_array[$tocregion] : '');
        }
        //echo "<script>console.log('Selected Option: ".$selected_option."'); </script>";

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
        $int_es = str_replace('/'.$lang ,'/es', $int_es);
        $int_es.="?region=int";
        @endphp
        <div class="language__dropdown dropdown">
            <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{$selected_option}}</span> <i class="fas fa-angle-down"></i></a>
            <div class="dropdown-content">
                <a href="/{{ $ca_en }}"><span class="notranslate"> English (Canada) </span></a>
                <a href="/{{ $us_en }}"><span class="notranslate"> English (US) </span></a>
                <a href="/{{ $int_en }}"><span class="notranslate"> English (International) </span></a>
                <a href="/{{ $ca_fr }}"><span class="notranslate"> Français (Canada) </span></a>
                <a href="/{{ $int_nl }}"><span class="notranslate"> Nederlands (Nederland) </span></a>
                <a href="/{{ $int_de }}"><span class="notranslate"> Deutsch </span></a>
                <a href="/{{ $int_es }}"><span class="notranslate"> Español </span></a>
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

            //if the page is search page
            if($searchparameter !== 'none') {

                //get lang & region from the query parameter
                $lang = Request::input('lang');
                $region = Request::input('region');          
                
                //set the URLs for region dropdown
                $ca_en = Request::fullurl();
                $ca_en = str_replace($lang ,'en', $ca_en);
                $ca_en = str_replace($region , 'ca', $ca_en);
                $us_en = Request::fullurl();
                $us_en = str_replace($lang ,'en', $us_en);
                $us_en = str_replace($region , 'us', $us_en);
                $int_en = Request::fullurl();
                $int_en = str_replace($lang ,'en', $int_en);
                $int_en = str_replace($region , 'int', $int_en);
                $ca_fr = Request::fullurl();
                $ca_fr = str_replace($lang ,'fr', $ca_fr);
                $ca_fr = str_replace($region , 'ca', $ca_fr);
                $int_nl = Request::fullurl();
                $int_nl = str_replace($lang ,'nl', $int_nl);
                $int_nl = str_replace($region , 'int', $int_nl);
                $int_de = Request::fullurl();
                $int_de = str_replace($lang ,'de', $int_de);
                $int_de = str_replace($region , 'int', $int_de);
                $int_es = Request::fullurl();
                $int_es = str_replace($lang ,'es', $int_es);
                $int_es = str_replace($region , 'int', $int_es);
            } else {
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
                $int_es = str_replace('/'.$lang ,'/es', $int_es);
                $int_es = str_replace($region.'/' , 'int/', $int_es);
            }
            
            //set the selected option text for the lang/region dropdown
            if($lang == "de" || $lang == "nl" || $lang == "es") {
                $selected_option = ((!empty($lang_array[$lang])) ? $lang_array[$lang] : '').((!empty($region_array[$lang])) ? $region_array[$lang] : '');
            } else {
                $selected_option = ((!empty($lang_array[$lang])) ? $lang_array[$lang] : '').((!empty($region_array[$region])) ? $region_array[$region] : '');
            }        
            echo "<script>console.log('Selected Option: ".$selected_option."'); </script>";

            
        @endphp
        <div class="language__dropdown dropdown">
            <a href="#"><i class="fas fa-globe-americas"></i> <span class="notranslate">{{$selected_option}}</span> <i class="fas fa-angle-down"></i></a>
            <div class="dropdown-content">
                <a href="/{{ $ca_en }}"><span class="notranslate"> English (Canada) </span></a>
                <a href="/{{ $us_en }}"><span class="notranslate"> English (US) </span></a>
                <a href="/{{ $int_en }}"><span class="notranslate"> English (International) </span></a>
                <a href="/{{ $ca_fr }}"><span class="notranslate"> Français (Canada) </span></a>
                <a href="/{{ $int_nl }}"><span class="notranslate"> Nederlands (Nederland) </span></a>
                <a href="/{{ $int_de }}"><span class="notranslate"> Deutsch </span></a>
                <a href="/{{ $int_es }}"><span class="notranslate"> Español </span></a>
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