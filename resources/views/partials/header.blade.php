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
                $searchURL = route('search', [$product, $version, $lang]);
                @endphp
                <form method="GET" action="{{$searchURL}}">
                    <input type="text" name="search" placeholder="Search" autocomplete="off">
                </form>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="expanded-filters">
            <div class="dropdown-content">
                <div class="filters__menu">
                    <div class="filters__item se"><i class="fas fa-circle"></i> SE</div>
                    <div class="filters__item working-papers"><i class="fas fa-circle"></i> Working papers</div>
                    <div class="filters__item analytics"><i class="fas fa-circle"></i> Analytics</div>
                    <div class="filters__item time"><i class="fas fa-circle"></i> Time</div>
                </div>
            </div>
        </div>
    </div>
</header>
