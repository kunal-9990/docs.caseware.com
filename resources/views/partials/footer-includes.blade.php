@php
isset(Route::current()->parameters()["lang"]) ? $lang = Route::current()->parameters()["lang"] : $lang = '';
isset(Route::current()->parameters()["region"]) ? $region = Route::current()->parameters()["region"] : $region = '';
@endphp
@if($lang == 'en' && $region !== 'int')
    <!-- begin olark code -->
    <script type="text/javascript" async>
        ;(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
                /* custom configuration goes here (www.olark.com/documentation) */
                olark.identify('4439-775-10-8635');
    </script>
@endif
<!-- end olark code -->
<!-- This site is converting visitors into subscribers and customers with OptinMonster - https://optinmonster.com -->
        <script type="text/javascript" src="https://a.omappapi.com/app/js/api.min.js" data-account="87970" data-user="78239"
            async></script>
<!-- / https://optinmonster.com -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
<script src="{{ mix('/js/mk2/app.js') }}"></script>
<script src="{{ mix('/js/mk4/app.js') }}"></script>