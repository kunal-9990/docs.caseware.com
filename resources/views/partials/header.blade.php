@php
use Illuminate\Http\Request;

@endphp
<header class="header">
    <div class="container header__container">
        {{-- <div class="row"> --}}
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <img src="/img/caseware-cloud-logo.png" alt="CaseWare Cloud logo">
                @include('partials.nav')
            </div>
            <div class="header__input-search-wrapper">
                @php
                $product = Route::current()->parameters()["product"];
                $version = Route::current()->parameters()["version"];
                $lang = Route::current()->parameters()["lang"];
                $searchURL = route('search1', [$product, $version, $lang]);
                @endphp
                <form method="GET" action="{{$searchURL}}">
                    <input type="text" name="search" placeholder="Search" autocomplete="off">
                </form>
            </div>
        </div>

    </div>
    <div class="container">
        <div class="expanded-filters"></div>
    </div>
</header>
