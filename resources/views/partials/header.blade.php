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
                $year = Route::current()->parameters()["year"];
                $product = Route::current()->parameters()["product"];
                $version = Route::current()->parameters()["version"];
                $lang = Route::current()->parameters()["lang"];
                $searchURL = route('search', [$year, $product, $version, $lang]);
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
                    <div class="switch-wrap">                    
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <span class="switch-name">SE</span>
                    </div>
                    <div class="switch-wrap">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <span class="switch-name">Working papers</span>
                    </div>
                    <div class="switch-wrap">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <span class="switch-name">Analytics</span>
                    </div>
                    <div class="switch-wrap">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <span class="switch-name">Time</span>
                    </div>
                    <div class="switch-wrap">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <span class="switch-name">PCR</span>
                    </div>
                    <div class="switch-wrap">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <span class="switch-name">RCT</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
