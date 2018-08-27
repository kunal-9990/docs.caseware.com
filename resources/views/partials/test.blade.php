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
		<h1>Welcome</h1>
	</section>
@stop