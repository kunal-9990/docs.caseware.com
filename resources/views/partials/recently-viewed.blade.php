<h5>recently viewed</h5>
<ul class="nav">
    @foreach (array_reverse($recent) as $topic)
        @php
            $splitUrl = explode("/", $topic);
            $title = end($splitUrl);
            $title = str_replace('-', ' ', $title);
            $title = str_replace('.htm', '', $title);
        @endphp
        <a href="{{$topic}}">
            <li>{{$title}}</li>
        </a>
    @endforeach
</ul>