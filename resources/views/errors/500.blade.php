@php
$noHeader = true;
@endphp

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
        'title' => 'Something is wrong..',
        'og_description' => 'test description',
        'canonical' => 'test canonical url'
    ])
@stop

<div "col-sm-12">
    <h1>
        500 error
        somethin wrong
    </h1>
</div>