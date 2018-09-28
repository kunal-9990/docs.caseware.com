<title>{{ $title or 'Caseware' }}</title>

<meta property="og:url" content="{{ $url or '' }}">
<meta property="og:title" content="{{ $og_title or '' }}">
<meta property="og:description" content="{{ $og_description or '' }}">
<meta property="og:image" content="/path/to/image.jpg" />
<meta name="csrf-token" content="{{ csrf_token() }}">

<link rel="canonical" href="{{ $canonical or ''}}" />

          
          
<script src="/documentation_files/webapps/28/Content/Resources/Scripts/custom.modernizr.js">
</script>
<script src="/documentation_files/webapps/28/Content/Resources/Scripts/jquery.min.js">
</script>
<script src="/documentation_files/webapps/28/Content/Resources/Scripts/require.min.js">
</script>
<script src="/documentation_files/webapps/28/Content/Resources/Scripts/require.config.js">
</script>
<script src="/documentation_files/webapps/28/Content/Resources/Scripts/foundation.min.js">
</script>
<script src="/documentation_files/webapps/28/Content/Resources/Scripts/plugins.min.js">
</script>
<script src="/documentation_files/webapps/28/Content/Resources/Scripts/MadCapAll.js">
</script>
{{-- <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"> --}}