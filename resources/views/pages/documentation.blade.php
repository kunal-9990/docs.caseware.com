@extends('default')

@section('meta')
    @include('partials.meta', [
        'canonical' => url('/'),
        'url' => url('/'),
        'title' => 'documentation',
        'og_description' => 'test description',
        'canonical' => 'test canonical url'
    ])
@stop

@section('content')
	<div class="container">
        <div class="row">
            <div class="col-sm-2">
                @include('partials.toc')
            </div>
            <div class="col-sm-8">
                @include('partials.toc-content')
            </div>
            <div class="col-sm-2">
                @include('partials.sub-toc')
            </div>
        </div>
    </div>
@stop