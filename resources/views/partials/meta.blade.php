<title>{{ $title or 'Caseware' }}</title>

<meta property="og:url" content="{{ $url or '' }}">
<meta property="og:title" content="{{ $og_title or '' }}">
<meta property="og:description" content="{{ $og_description or '' }}">
<meta property="og:image" content="/path/to/image.jpg" />
<meta name="csrf-token" content="{{ csrf_token() }}">


{{-- While WIP on live server to prevent indexing --}}
<meta name="robots" content="noindex">

<link rel="canonical" href="{{ $canonical or ''}}" />

          
          

<script async="" src="https://www.google-analytics.com/analytics.js"></script>

{{-- GOOGLE ANALYTICS TAG --}}
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


</script>


{{-- <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"> --}}