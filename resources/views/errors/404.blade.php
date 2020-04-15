@php
$noHeader = true;
@endphp

@extends('default')

@section('html')
    @include('partials.html', [
        'exclusiveTo' => isset($exclusiveTo) ? $exclusiveTo : false,
    ])
@stop

@section('meta')
    @include('partials.meta', [
        'canonical' => url('/'),
        'url' => url('/'),
        'title' => 'Page not found',
        'og_description' => 'Page not found',
        'canonical' => 'test canonical url',
        'doNotTranslate' => isset($doNotTranslate) ? $doNotTranslate : false
    ])
@stop

@section('content')
<div class="container">
    <div class="row">
        <div class="page-404 col-sm-12 text-center">
            <div class="page-404__header">
                <span class="big-text">404</span> <span>We couldn't find<br /> this page</span>
            </div>
            <div class="page-404__back-home">
                Let's go back <a href="/2018/webapps/29/en/webapps.htm">home</a>
            </div>
        </div>
    </div>
</div>
@stop