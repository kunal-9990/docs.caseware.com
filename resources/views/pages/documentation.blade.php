@extends('default')

@section('html')
    @include('partials.html', [
        'exclusiveTo' => $exclusiveTo
    ])
@stop

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
                        @if(isset($maincontentarea))
                            @include('partials.toc-content', ['content' => $maincontentarea])
                        @endif
                        <div class="docs__user-feedback">
                            @include('partials.user-feedback')
                        </div>
                    </div>
                    <div class="docs__sub-toc">
                        <div class="docs__video-iframe-thumbnail-container">
                            <img class="docs__video-iframe-thumbnail" src="" alt="">
                            <img class="docs__video-iframe-thumbnail__yt-icon" src="/img/yt_icon_rgb.png" alt="">
                        </div>
                        @include('partials.sub-toc')
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