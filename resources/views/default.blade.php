<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @yield('meta')

    <link href="{{'/css/app.css'}}" rel="stylesheet" type="text/css">
</head>
<body>

    @include('partials.header')

    <main id="main">
        @yield('content')
    </main>

    <script src="{{'/js/app.js'}}"></script>

</body>
</html>