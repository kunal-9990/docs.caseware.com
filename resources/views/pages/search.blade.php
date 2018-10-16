@extends('search_layout')

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
    <div class="container documentation">
        <div class="row">
            <div class="col-sm-3">
                @include('partials.toc')
            </div>
            <div class="col-sm-9">
                <div class="docs__video-iframe-wrap">
                    @include('partials.video-iframe')
                </div>
                <div class="docs__container">
                    <div class="docs__content"> 
                                    <div id="searchPane" class="mc-component">
                                        <h1 id="results-heading">Your search for <span class="query"></span> returned <span class="total-results"></span> result(s).</h1>
                                        <div id="pagination"><a class="previousPage">Previous</a><a class="nextPage">Next</a>
                                        </div>
                                    </div>
                        <div class="docs__user-feedback">
                            @include('partials.user-feedback')
                        </div>
                    </div>
                    <div class="docs__sub-toc">

                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- back to top button --}}
    @include('partials.back-to-top')

    {{-- modal overlay for images in content --}}
    @include('partials.image-modal')

    {{-- modal overlay for email subscription and pdf download --}}
    @include('partials.download-pdf')
@stop