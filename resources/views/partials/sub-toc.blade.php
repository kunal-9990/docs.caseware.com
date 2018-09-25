<section class="toc-subtopics">
    <h5>in this article</h5>
    <ul class="nav">
        <li><a href="#view-cost-billing-summary">Viewing cost and billing summaries</a></li>
        <li><a href="#generate-time-report">Generating a Time and Expense report</a></li>
    </ul>
    <h5>recently viewed</h5>
    <ul class="nav">
            @foreach (array_reverse($recent) as $topic)
                @php
                    $splitUrl = explode("/", $topic);
                    $title = end($splitUrl);
                    $title = str_replace('-', ' ', $title);
                    $title = str_replace('.htm', '', $title);
                @endphp
                <a href="{{$topic}}"><li>{{$title}}</li></a>
            @endforeach
    </ul>
</section>