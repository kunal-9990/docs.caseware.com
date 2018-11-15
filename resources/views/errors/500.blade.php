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
        'title' => 'Something is wrong..',
        'og_description' => 'test description',
        'canonical' => 'test canonical url',
        'doNotTranslate' => isset($doNotTranslate) ? $doNotTranslate : false
    ])
@stop

@section('content')
<div class="container">
    <div class="row">
        <div class="page-404 col-sm-12 text-center">
            <div class="page-404__header">
                <span class="big-text">500</span> <span>It's not you<br /> it's us</span>
            </div>
            <div class="page-404__back-home">
                Let's go back <a href="/2018/webapps/29/en/webapps.htm">home</a>
            </div>
        </div>
    </div>
</div>
@stop