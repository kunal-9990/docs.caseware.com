@extends('default')

@section('html')
    @include('partials.html', [
        'exclusiveTo' =>  isset($exclusiveTo) ? $exclusiveTo : false,
    ])
@stop

@section('meta')
    @include('partials.meta', [
        'canonical' => url('/'),
        'url' => url('/'),
        'title' => 'CaseWare Cloud Docs Home',
        'og_description' => 'CaseWare Cloud Docs Home',
        'canonical' => 'test canonical url'
    ])
@stop