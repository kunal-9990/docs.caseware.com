<title>{{ $title or 'Caseware' }}</title>

<meta property="og:url" content="{{ $url or '' }}">
<meta property="og:title" content="{{ $og_title or '' }}">
<meta property="og:description" content="{{ $og_description or '' }}">
<meta property="og:image" content="/path/to/image.jpg" />
<meta name="csrf-token" content="{{ csrf_token() }}">


{{-- While WIP on live server to prevent indexing --}}
<meta name="robots" content="noindex">

<link rel="canonical" href="{{ $canonical or ''}}" />


{{-- Tell Google about localized versions of our pages --}}
@php
$segments = Request::segments();
$segments[3] = 'en';
$enLink = env('DOMAIN') . implode('/', $segments);
$segments[3] = 'fr';
$frLink = env('DOMAIN') . implode('/', $segments);
$segments[3] = 'es';
$esLink = env('DOMAIN') . implode('/', $segments);
$segments[3] = 'nl';
$nlLink = env('DOMAIN') . implode('/', $segments);
$segments[3] = 'cn';
$cnLink = env('DOMAIN') . implode('/', $segments);
$segments[3] = 'de';
$deLink = env('DOMAIN') . implode('/', $segments);
@endphp
<link rel="alternate" hreflang="en" href="{{$enLink}}" />
<link rel="alternate" hreflang="fr" href="{{$frLink}}" />
<link rel="alternate" hreflang="es" href="{{$esLink}}" />
<link rel="alternate" hreflang="nl" href="{{$nlLink}}" />
<link rel="alternate" hreflang="de" href="{{$deLink}}" />
<link rel="alternate" hreflang="cn" href="{{$cnLink}}" /> 

<script async="" src="https://www.google-analytics.com/analytics.js"></script>

{{-- GOOGLE ANALYTICS TAG --}}
<script>
	(function (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function () {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
</script>

{{-- google translate script --}}
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
	< script type = "text/javascript" > /* <![CDATA[ */
		var myURL = document.location.href;

	if (myURL.indexOf("/en/") !== -1) {
		document.cookie = "googtrans" + "=" + "/en/en/";
	} else if (myURL.indexOf("/fr/") !== -1) {
		document.cookie = "googtrans" + "=" + "/en/fr/";
	} else if (myURL.indexOf("/es/") !== -1) {
		document.cookie = "googtrans" + "=" + "/en/es/";
	} else if (myURL.indexOf("/cn/") !== -1) {
		document.cookie = "googtrans" + "=" + "/en/zh-CN/";
	} else if (myURL.indexOf("/tw/") !== -1) {
		document.cookie = "googtrans" + "=" + "/en/zh-TW/";
	} else {
		document.cookie = "googtrans" + "=" + "/en/en/";
	}

	function play(id) {
		if (document.getElementById('animated' + id).style.cssText.match('display: none;')) {

			document.getElementById('animated' + id).style.cssText = 'display:inline';
			document.getElementById('fixed' + id).style.cssText = 'display: none';

		} else {

			document.getElementById('animated' + id).style.cssText = 'display:none';
			document.getElementById('fixed' + id).style.cssText = 'display: inline';

		}
	}
	/* ]]> */
</script>

<script type="text/javascript">
	/* <![CDATA[ */
	function googleTranslateElementInit() {
		new google.translate.TranslateElement({
			pageLanguage: 'en',
			includedLanguages: 'de,es,fr,nl,zh-CN,zh-TW',
			layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
			gaTrack: true,
			gaId: 'UA-37974433-25'
		}, 'google_translate_element');
	}
	/* ]]> */
</script>



