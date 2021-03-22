@extends('default_search')


@section('content')
<div class="container search-page">
       <div id="searchPane" class="mc-component">
        <h1 >Your search for <span class="query">{{$query}}</span> returned <span
                class="total-results">{{count($results["hits"])}}</span> result(s)</h1>
        <ul id="newResultList">
           @foreach($results["hits"] as $result)

            <li>
                <h3 class="title"><a href="{{$result["url"]}}">{{$result["title"]}}</a></h3>
                <div class="description">{{substr(trim($result["body"]), 0, 400)}} ... </div>
                <div class="url"><cite>{{$result["url"]}}</cite></div>
            </li>
           @endforeach
        </ul>

    </div>
    </div>
@stop