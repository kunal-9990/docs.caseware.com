
<!DOCTYPE html>
@yield('html')
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('partials.meta')
</head>
<body>
    <div class="page-wrap">
       
        <div class="csh">

            @if ($pageContent->acf->banner->banner_background_type === 'none')
                @include('partials.header')
                @include('partials.header-mobile')
            @else
                @include('partials.header-ghost')
            @endif

            <div class="csh__banner">
                <div
                    data-component="banner" 
                    data-prop-banner="{{htmlspecialchars(json_encode($pageContent->acf->banner))}}"
                ></div>
            </div>
            
            <main id="main">
                <div class="container container--mk4">
                    {{ Breadcrumbs::render('csh') }}
                    <div class="row">
                        <div class="col-sm-12">
                           <div 
                                data-component="csh" 
                                data-props="{{htmlspecialchars(json_encode($pageContent->acf->group))}}" 
                            ></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div data-component="region-lightbox"
            data-prop-open={{json_encode(session('openRegionLightbox'))}}
            data-prop-redirect={{str_replace('/'.app('request')->route()->parameters['region'].'/', '/'.Cookie::get('region').'/', Request::url())}}
    ></div>

        @include('partials.cookie-consent')
        @include('partials.footer')
        @include('partials.footer-includes')
</body>
</html>