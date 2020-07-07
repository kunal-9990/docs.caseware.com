
<!DOCTYPE html>

@yield('html')
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @include('partials.meta')

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" type="text/css">
    
    {{-- FontAwesome icons --}}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/brands.css" integrity="sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
</head>
<body>
    <div class="page-wrap">
       
        <div class="landing">

        @include('partials.header-ghost')
        
        <div class="landing__banner">
            <div
                data-component="banner" 
                data-prop-banner="{{htmlspecialchars(json_encode($pageContent->acf->banner))}}"
            ></div>
        </div>
        <main id="main">
            @foreach($pageContent->acf->modular_template as $section)
                 
                    @if($section->acf_fc_layout == "text_block")
                        <div class="container container--mk4 landing__block">
                            <div class="row">
                                <div class="col-sm-12">
                                    @if($section->logo)<img src="{{$section->logo->url}}" alt="{{$section->logo->alt}}" />@endif
                                    @if(!empty($section->header))<h2>{{ $section->header }}</h2>@endif
                                    @if(isset($section->description))<div>{!! $section->description !!}</div>@endif
                                </div>
                            </div>
                        </div>
                    @endif

                    @if($section->acf_fc_layout == "navigation")
                        <div class="container container--mk4 landing__product-nav">
                            <div class="row">
                                <div class="col-sm-12">  
                                    <div data-component="product-navigation" data-props="{{ htmlspecialchars(json_encode($section)) }}"></div>
                                </div>
                            </div>
                        </div>                                
                    @endif

                    @if($section->acf_fc_layout == "carousel")
                        <div class="container container--mk4 landing__carousel">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div
                                        data-component="carousel"
                                        data-prop-carousel="{{htmlspecialchars(json_encode($section->carousel))}}"
                                    ></div>
                                </div>  
                            </div>
                        </div>
                    @endif

                    @if($section->acf_fc_layout == "video_gallery")
                        <div class="container container--mk4 landing__video-gallery">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div
                                        data-component="video-gallery"
                                        data-prop-videos="{{htmlspecialchars(json_encode($section->video_gallery))}}"
                                        data-props='{
                                            "cta":"{{$section->yt_cta}}",
                                            "label":"{{$section->cta_label}}",
                                            "link":"{{$section->cta_link}}"
                                        }'
                                        ></div>
                                </div>
                            </div>
                        </div>
                    @endif

                    @if($section->acf_fc_layout == "links")
                    <div class="landing__links">
                        <div class="container container--mk4">
                            <div class="row">
                                <div class="col-sm-12 links">
                                    @foreach($section->link_block as $block)
                                        <div class="links__block">
                                            @if(isset($block->header))
                                                <h2>{{$block->header}}</h2>
                                            @endif
                                            @foreach($block->links as $link)
                                                <div>
                                                    <a href="{{$link->link_url}}" target="_blank" class="btn--arrow">
                                                        {{ $link->link_text }}
                                                    </a>
                                                </div>
                                            @endforeach
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                    @endif

                    @if($section->acf_fc_layout == "downloads")
                    <div class="landing__downloads">
                        <div class="container container--mk4">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div
                                        data-component="downloads"
                                        data-props="{{htmlspecialchars(json_encode($section))}}"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    @endif

                @endforeach

                <!-- <?php echo '<pre>';var_dump($pageContent->acf);echo'</pre>';?> -->
        </main>
    </div>
    </div>
    

    <div data-component="region-lightbox"
            data-prop-open={{session('openRegionLightbox')}}
            data-prop-redirect={{str_replace('/'.app('request')->route()->parameters['region'].'/', '/'.Cookie::get('region').'/', app('request')->path)}}
    ></div>


        @include('partials.cookie-consent')
        @include('partials.footer')
        
        @if(1)
            <!-- begin olark code -->
            <script type="text/javascript" async>
                ;(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
            /* custom configuration goes here (www.olark.com/documentation) */
            olark.identify('4439-775-10-8635');
            </script>
            <!-- end olark code -->
        @endif
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        
        <script src="{{ mix('/js/mk2/app.js') }}"></script>
        <script src="{{ mix('/js/mk4/app.js') }}"></script>
</body>
</html>