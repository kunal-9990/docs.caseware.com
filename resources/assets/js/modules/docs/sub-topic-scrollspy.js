module.exports = () => {
    // const TOC_SUBTOPIC_CONTAINER = document.querySelector('.toc-subtopics');

    $(window).scroll(() => {
        const windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.toc-content h2').each(function updateActiveSubToc(i) {
                if ($(this).position().top <= windscroll - 20) {
                    $('ul.nav li.toc-subtopics--active-nav').removeClass('toc-subtopics--active-nav');
                    $('ul.nav li').eq(i).addClass('toc-subtopics--active-nav');
                }
            });
        } else {
            $('ul.nav li.toc-subtopics--active-nav').removeClass('toc-subtopics--active-nav');
            $('ul.nav li:first').addClass('toc-subtopics--active-nav');
        }
    }).scroll();

    window.addEventListener('scroll', () => {
        // if ($(window).scrollTop() > Math.round($('.toc-subtopics').offset().top)) {
        //     console.log('if');
        //     TOC_SUBTOPIC_CONTAINER.classList.add('affix');
        // } else {
        //     TOC_SUBTOPIC_CONTAINER.classList.remove('affix');
        //     console.log('else');
        // }
        // const DISTANCE_TOP = Math.round(TOC_SUBTOPIC_CONTAINER.getBoundingClientRect().top);
        // // console.log(roundDistanceToTop);
        // if (TOC_SUBTOPIC_CONTAINER.getBoundingClientRect().top < 21) {
        //     console.log('if');
        //     // TOC_SUBTOPIC_CONTAINER.classList.add('affix');
        // } else {
        //     console.log('else');
        //     TOC_SUBTOPIC_CONTAINER.classList.remove('affix');
        // }

        // TOC_SUBTOPIC_CONTAINER.getBoundingClientRect().top > 21
        //     ? TOC_SUBTOPIC_CONTAINER.classList.add('affix')
        //     : TOC_SUBTOPIC_CONTAINER.classList.remove('affix');
        // console.log(TOC_SUBTOPIC_CONTAINER.getBoundingClientRect().top);
    });
};
