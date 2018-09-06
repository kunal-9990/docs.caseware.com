module.exports = () => {
    // Scrollspy for toc-subnav
    $(window).scroll(() => {
        const windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.toc-content h2').each(function updateActiveSubToc(i) {
                if ($(this).position().top <= windscroll - 20) {
                    $('ul.nav li.toc-topics--active-nav').removeClass('toc-topics--active-nav');
                    $('ul.nav li').eq(i).addClass('toc-topics--active-nav');
                }
            });
        } else {
            $('ul.nav li.toc-topics--active-nav').removeClass('toc-topics--active-nav');
            $('ul.nav li:first').addClass('toc-topics--active-nav');
        }
    }).scroll();
};
