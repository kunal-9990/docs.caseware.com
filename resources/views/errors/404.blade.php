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
'og_description' => 'test description',
'canonical' => 'test canonical url'
])
@stop

<div "col-sm-12">
    <h1>
        404 error
        can't find it
    </h1>
</div>