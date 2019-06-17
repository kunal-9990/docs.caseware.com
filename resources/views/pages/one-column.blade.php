@extends('default')

@section('html')
    @include('partials.html', [
        'exclusiveTo' =>  isset($exclusiveTo) ? $exclusiveTo : false,
    ])
@stop

@section('meta')
    @include('partials.meta', [
        'canonical' => URL::current(),
        'url' => URL::current(),
        'title' =>  isset($title) ? $title : null,
        'og_description' => isset($title) ? $title : null,
        'doNotTranslate' => isset($doNotTranslate) ? $doNotTranslate : false,
    ])
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                {{-- <div class="docs__video-iframe-wrap">
                    @include('partials.video-iframe')
                </div> --}}
                <div class="docs__container">
                    <div class="docs__content"> 
                        @if(isset($maincontentarea))
                            @include('partials.toc-content', ['content' => $maincontentarea])
                        @endif
                        <div class="docs__user-feedback">
                            @include('partials.user-feedback')
                        </div>
                    </div>
                </div>
                @include('partials.filter-msg', [
                    'exclusiveTo' =>  isset($exclusiveTo) ? $exclusiveTo : false,
                ])
            </div>
        </div>
    </div>

    {{-- back to top button --}}
    {{-- @include('partials.back-to-top') --}}

    {{-- modal overlay for images in content --}}
    {{-- @include('partials.image-modal') --}}

    {{-- modal overlay for email subscription and pdf download --}}
    {{-- @include('partials.download-pdf') --}}
@stop