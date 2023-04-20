﻿<?xml version="1.0" encoding="utf-8"?>
<html xmlns:MadCap="http://www.madcapsoftware.com/Schemas/MadCap.xsd" MadCap:lastBlockDepth="11" MadCap:lastHeight="349" MadCap:lastWidth="691">
    <head>
        <link rel="shortcut icon" href="../CaseWare_Logos/favicon.ico" type="image/x-icon" />
        <meta name="google-translate-customization" content="ad1fc64b68ce99cb-1145fc38ed0101e8-g15336b4538df18af-1a">
        </meta>
		<meta name="robots" content="noindex" />
        <script>/*<![CDATA[*/</script>

			<!-- load jQuery 3.1.1 -->
			<script src="/assets/js/jquery.min.js"></script>
			<script src="/bootstrap/js/bootstrap.min.js"></script>

			<!-- jquery no conflict mode -->
			<script type="text/javascript">var jQuery3_1_1 = $.noConflict(true);</script>

			<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
			<link href="/bootstrap/css/bootstrap.css" rel="stylesheet" />
			<link href="/assets/stylesheets/style.less" rel="stylesheet" type="text/css" />
			<link href="/assets/stylesheets/style.css" rel="stylesheet" type="text/css" />
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
		<script>/*]]>*/</script>
        <script type="text/javascript">
			var myURL = document.location.href;

			if(myURL.indexOf("/en/") !== -1){
			document.cookie="googtrans" + "=" + "/en/en/";
			}else if(myURL.indexOf("/fr/") !== -1){
			document.cookie="googtrans" + "=" + "/en/fr/";
			}else if (myURL.indexOf("/es/") !== -1){
			document.cookie="googtrans" + "=" + "/en/es/";
			}else if (myURL.indexOf("/de/") !== -1){
			document.cookie="googtrans" + "=" + "/en/de/";
			}else if (myURL.indexOf("/nl/") !== -1){
			document.cookie="googtrans" + "=" + "/en/nl/";
			}else if (myURL.indexOf("/cn/") !== -1){
			document.cookie="googtrans" + "=" + "/en/zh-CN/";
			}else if (myURL.indexOf("/tw/") !== -1){
			document.cookie="googtrans" + "=" + "/en/zh-TW/";
			}else{
			document.cookie="googtrans" + "=" + "/en/en/";
			}

			function play(id)
			{
			if(document.getElementById('animated'+id).style.cssText.match('display: none;'))
			{

			document.getElementById('animated'+id).style.cssText = 'display:inline';
			document.getElementById('fixed'+id).style.cssText = 'display: none';

			}else{

			document.getElementById('animated'+id).style.cssText = 'display:none';
			document.getElementById('fixed'+id).style.cssText = 'display: inline';

			}
			}
		</script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script type="text/javascript">/* <![CDATA[ */
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'de,es,fr,nl,zh-CN,zh-TW', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, gaTrack: true, gaId: 'UA-37974433-25'}, 'google_translate_element');
      }
      /* ]]> */</script>
    </head>
    <body>
        @include('partials.gtm-body')
        <div class="colcontainer container">
            <div class="row">
                <div class="toccol col-xs-12 col-sm-pull-0 col-md-pull-0 col-lg-pull-0 col-xs-pull-3 hidden-xs col-lg-3 col-md-4 col-sm-4 hidden-sm">
                    <div id="toc" class="tocdiv pull-right tocborder">
                    </div>
                    <br />
                </div>
                <div id="topicvid" class="col-md-8 col-xs-12 col-sm-8 col-lg-9">
                </div>
                <div class="col-xs-12 maincontentarea col-lg-6 col-md-8 col-sm-12">
                    <MadCap:bodyProxy />
                </div>
                <div class="rightcol col-md-8 col-lg-3 col-md-pull-0 col-lg-pull-0 col-lg-push-0 col-sm-8 pull-right col-xs-12">
                    <div id="videocontainer" class="rightcolitem">
                    </div>
                    <p id="vidtitle" class="vidtitle">
                    </p>
                    <div id="workflows">
                    </div>
                    <ul id="recentpages" class="recentlyviewedlist">
                    </ul>
                    <div class="rightcolitem" id="feedbackbox">
                        <p id="feedbackmessage" class="rightcoltitle">Was this topic helpful?<br /></p>
                        <button type="button" class="btn btn-default feedbackbutton" onclick="feedback('Yes')">Yes</button>
                        <button type="button" class="btn btn-default feedbackbutton" onclick="feedback('No')">No</button>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="row footer">
                <div class="col-xs-4">
                    <img src="/Resources/CaseWare_Logos/Flat_Help_CW_Footer.svg" class="footerlogo" width="280" /><a href="https://www.caseware.com"></a>
                </div>
                <div class="footertext col-xs-4">
                    <p class="footertext text-center">Copyright © 2017 CaseWare International</p>
                </div>
                <div class="footertext col-xs-4 text-center"><a href="https://www.linkedin.com/groups/1935174/profile"><i class="fa fa-linkedin-square sociallink fa-2x"></i></a><a href="http://www.facebook.com/pages/CaseWare-International-Inc/54418196590?ref=ts"><i class="fa fa-facebook-square sociallink fa-2x"></i></a><a href="https://twitter.com/CaseWare"><i class="fa fa-twitter-square sociallink fa-2x"></i></a><a href="http://www.youtube.com/user/casewarevids?feature=results_main"><i class="fa fa-youtube-square sociallink fa-2x"></i></a><a href="https://www.caseware.com/caseware-rss"><i class="fa fa-rss-square sociallink fa-2x"></i></a>
                </div>
            </div>
        </footer>
        <!--our scripts -->
        <script src="/assets/js/recent.js">
        </script>
        <script src="/assets/js/feedback.js">
        </script>
        <script src="/assets/js/generateTOC.js">
        </script>
        <script src="/assets/js/topnav.js">
        </script>
        <script src="/assets/js/videoresize.js">
        </script>
        <script src="/assets/js/generateworkflows.js">
        </script>
        <script src="/assets/js/imagemodal.js">
        </script>
        <script src="/assets/js/fromWorkflowFlash.js">
        </script>
		<script src="/assets/js/helpers.js">
		</script>
		<script src="/assets/js/enableDownload.js">
		</script>
    </body>
</html>
