@extends('default_search')

@section('meta')
    @include('partials.meta', [
        'canonical' => url('/'),
        'url' => url('/'),
        'title' => 'CaseWare Cloud Search Results', 
        'og_description' => 'CaseWare Cloud Search Results',
        'canonical' => 'CaseWare Cloud Search Results',
        'doNotTranslate' => isset($doNotTranslate) ? $doNotTranslate : false
    ])
@stop

@section('content')
    <div class="container search-page">
        <div id="searchPane" class="mc-component">
            <h1 id="results-heading">Your search for <span class="query"></span> returned <span class="total-results"></span> result(s)</h1>
            <div id="pagination">
                <a class="previousPage">Previous</a><a class="nextPage">Next</a>
            </div>
        </div>
    </div>
@stop