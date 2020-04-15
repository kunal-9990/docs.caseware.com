
<!DOCTYPE html>
@yield('html')
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @yield('meta')

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" type="text/css">
    
    {{-- FontAwesome icons --}}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/brands.css" integrity="sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
</head>
<body>
    <div class="whats-new">
        
        @php
        if(!isset($noHeader)){
            $noHeader = false;
        }
        @endphp
        @if(!$noHeader)
        @include('partials.header')
        @include('partials.header-mobile')
        @endif

        <div 
            data-component="announcement"
            data-props='{"title":"OnPoint PCR Fall Release available now!", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}'
        ></div>

        <div 
            data-component="banner"
            data-props='{"background":"/img/whats-new-banner.jpg","product":"Cloud 31.0", "strapline":"Are you ready to streamline your organization&apos;s security?<br/>Cloud 31.0 features Single Sing-On, Xero integration and more."}'
        ></div>

        <main id="main">
            <div class="container whats-new">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="docs__video-iframe-wrap">
                            @include('partials.video-iframe')
                        </div>
                        <div class="docs__container">
                            <div class="docs__content"> 
                                @if(isset($maincontentarea))
                                    @include('partials.toc-content', ['content' => $maincontentarea])
                                @endif
                            </div>
                            <div class="docs__sub-toc">
                                <div class="docs__video-iframe-thumbnail-container">
                                    <img class="docs__video-iframe-thumbnail" src="" alt="">
                                    <img class="docs__video-iframe-thumbnail__yt-icon" src="/img/yt_icon_rgb.png" alt="">
                                </div>
                                @include('partials.sub-toc')
                            </div>
                        </div>
                        @include('partials.filter-msg', [
                            'exclusiveTo' =>  isset($exclusiveTo) ? $exclusiveTo : false,
                        ])
                    </div>
                </div>
            </div>

            {{-- back to top button --}}
            @include('partials.back-to-top')

            {{-- modal overlay for images in content --}}
            @include('partials.image-modal')

            {{-- modal overlay for email subscription and pdf download --}}
            @include('partials.download-pdf')
        </main>

        @include('partials.cookie-consent')
        @include('partials.footer')
    </div>
        @if(Route::current()->parameters()["lang"] == "en")
            <!-- begin olark code -->
            <script type="text/javascript" async>
                ;(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
            /* custom configuration goes here (www.olark.com/documentation) */
            olark.identify('4439-775-10-8635');
            </script>
            <!-- end olark code -->
        @endif
        <script src="{{ mix('/js/mk2/app.js') }}"></script>
        <script src="{{ mix('/js/mk4/app.js') }}"></script>
</body>
</html>