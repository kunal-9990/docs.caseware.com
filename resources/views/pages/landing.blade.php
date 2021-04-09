<!DOCTYPE html>

@yield('html')

<head>

    @include('partials.meta')
    {!! $pageContent->yoast_head !!}
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" type="text/css">
</head>

<body>
    <div class="page-wrap">

        <div class="landing">

            @if ($pageContent->acf->banner->banner_background_type === 'none')
            @include('partials.header')
            @include('partials.header-mobile')
            @else
            @include('partials.header-ghost')
            @endif

            <div class="landing__banner">
                <div data-component="banner" data-prop-banner="{{json_encode($pageContent->acf->banner)}}"></div>
            </div>

            {{-- breacrumbs --}}
            @if(Request::route()->getName() == 'product')
            <div class="container container--mk4 breadcrumb-container">
                <div class="row">
                    <div class="col-sm-12">
                        {{ Breadcrumbs::render('product') }}
                    </div>
                </div>
            </div>
            @endif

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
                @if($section->acf_fc_layout == "navigation" || $section->acf_fc_layout == "product_navigation")


                <div class="container container--mk4 landing__product-nav">
                    <div class="row">
                        <div class="col-sm-12">
                            <div data-component="product-navigation" data-props="{{ json_encode($section) }}"></div>
                        </div>
                    </div>
                </div>
                @endif

                @if($section->acf_fc_layout == "carousel")
                <div class="container container--mk4--extended landing__carousel">
                    <div class="row">
                        <div class="col-sm-12">
                            <div data-component="carousel" data-props="{{json_encode($section)}}"></div>
                        </div>
                    </div>
                </div>
                @endif

                @if($section->acf_fc_layout == "video_gallery")
                <div class="container container--mk4--extended landing__video-gallery">
                    <div class="row">
                        <div class="col-sm-12">
                            <div data-component="video-gallery" data-props="{{json_encode($section)}}"></div>
                        </div>
                    </div>
                </div>
                @endif

                @if($section->acf_fc_layout == "links")
                <div class="landing__links">
                    <div class="container container--mk4">
                        <div class="row">
                            @foreach($section->link_block as $block)
                            <div class="col-sm-12 links">
                                <div class="links__block">
                                    @if(isset($block->header))
                                    <h2>{{$block->header}}</h2>
                                    @endif
                                    <div class="row">
                                        @foreach($block->links as $link)
                                        <div class="col-sm-6">
                                            <a href="{{$link->link_url}}" target="_blank" class="btn--arrow">
                                                {{ $link->link_text }}
                                            </a>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
                @endif

                @if($section->acf_fc_layout == "downloads")
                <div class="landing__downloads">
                    <div class="container container--mk4">
                        <div class="row">
                            <div class="col-sm-12">
                                <div data-component="downloads" data-props="{{json_encode($section)}}"></div>
                            </div>
                        </div>
                    </div>
                    @endif

                    @endforeach
            </main>
        </div>
    </div>

    @if(!Cookie::get('modalDismissed'))
    @php
        $redirecturl;
        if(app('request')->route()->parameters['region'] == "nl"){
        $redirecturl = str_replace('/'.app('request')->route()->parameters['region'].'/', '/'.session('requestRegion').'/', Request::url());
        $redirecturl = str_replace('/'.app('request')->route()->parameters['lang'].'/', '/nl/', Request::url());
        }
        else {
        $redirecturl = str_replace('/'.app('request')->route()->parameters['region'].'/', '/'.session('requestRegion').'/', Request::url());
        }
    @endphp
    <div data-component="region-lightbox" data-prop-open={{json_encode(session('openRegionLightbox'))}}
        data-prop-redirect={{$redirecturl}}></div>
    @endif

    @include('partials.cookie-consent')
    @include('partials.footer')
    @include('partials.footer-includes')

</body>

</html>