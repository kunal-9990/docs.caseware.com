<!DOCTYPE html>
<html xmlns:MadCap="http://www.madcapsoftware.com/Schemas/MadCap.xsd" lang="en-us" xml:lang="en-us"
      class="searchTopic templateTopic" 
      search-type="Stem" 
      data-mc-help-system-file-name="Default.xml" 
      data-mc-path-to-help-system="" 
      data-mc-target-type="WebHelp2"
      data-mc-runtime-file-type="Topic;Search;Default" 
      data-mc-preload-images="false" 
      data-mc-in-preview-mode="false" 
      data-mc-toc-path="">
 
 <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @yield('meta')

    <link href="{{'/css/app_search.css'}}" rel="stylesheet" type="text/css">
    
    {{-- FontAwesome icons --}}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/brands.css" integrity="sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
</head>
<body>
    @include('partials.header')
    @include('partials.header-mobile')

    <main id="main">
        @yield('content')
    </main>

    @include('partials.footer')

    <script>
        function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        var search = getParameterByName('search', window.location.href);
        window.location.hash = 'search-' + search;    
    </script>
    <script src="{{'/js/app.js'}}"></script>
    <script src="/documentation_files/webapps/28/Content/Resources/Scripts/custom.modernizr.js"></script>
    <script src="/documentation_files/webapps/28/Content/Resources/Scripts/jquery.min.js"></script>
    <script src="/documentation_files/webapps/28/Content/Resources/Scripts/require.min.js"></script>
    <script src="/documentation_files/webapps/28/Content/Resources/Scripts/require.config.js"></script>
    <script src="/documentation_files/webapps/28/Content/Resources/Scripts/foundation.min.js"></script>
    <script src="/documentation_files/webapps/28/Content/Resources/Scripts/plugins.min.js"></script>
    <script src="/documentation_files/webapps/28/Content/Resources/Scripts/MadCapAll.js"></script>
</body>
</html>

