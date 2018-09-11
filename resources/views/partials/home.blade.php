@extends('default')

@section('meta')
    @include('partials.meta', [
        'canonical' => url('/'),
        'url' => url('/'),
        'title' => 'test title',
        'og_description' => 'test description',
        'canonical' => 'test canonical url'
    ])
@stop

@section('content')
	<section class="intro">
		<div class="container">
            <div class="row">
                <h1 class="text-center">Hello World!</h1>
            </div>
        </div>
	</section>
@stop