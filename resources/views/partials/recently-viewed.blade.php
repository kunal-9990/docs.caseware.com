<h5>Recently viewed</h5>
<ul class="nav">
    @foreach (array_reverse($recent) as $topic)
        @php
            $splitUrl = explode("/", $topic);
            $title = end($splitUrl);
            $title = str_replace('-', ' ', $title);
            $title = str_replace('.htm', '', $title);
        @endphp
        <li><a href="{{$topic}}">{{$title}}</a></li>
    @endforeach
</ul>