
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
        @include('partials.gtm-body')
    <div class="">
    <div class="flex-page-container">
        
        @php
        if(!isset($noHeader)){
            $noHeader = false;
        }
        @endphp
        @if(!$noHeader)
        @include('partials.header')
        @include('partials.header-mobile')
        @endif

    {{-- <div class="flex-page-container"> --}}
        <main id="main">
            @yield('content')
        </main>
    </div>
    </div>
        @include('partials.cookie-consent')
        @include('partials.footer')
        
    <!-- This site is converting visitors into subscribers and customers with OptinMonster - https://optinmonster.com -->
    <script type="text/javascript" src="https://a.omappapi.com/app/js/api.min.js" data-account="87970" data-user="78239"
        async></script>
    <!-- / https://optinmonster.com -->
    <script src="{{ mix('/js/mk2/app.js') }}"></script>
    <script src="{{ mix('/js/mk4/app.js') }}"></script>
</body>
</html>