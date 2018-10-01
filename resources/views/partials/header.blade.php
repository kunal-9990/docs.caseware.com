<header class="header">
    <div class="container header__container">
        <div class="header__search-wrap">
            <div class="header__nav-wrap">
                <img src="/img/caseware-cloud-logo.png" alt="CaseWare Cloud logo">
                @include('partials.header-nav')
            </div>
            <div class="header__input-search-wrapper">
                <form method="GET" action="../../search">
                    <input type="text" name="search" placeholder="Search">

                    {{-- <button type="submit">submit</button> --}}
                </form>
            </div>
        </div>
    </div>
</header>
