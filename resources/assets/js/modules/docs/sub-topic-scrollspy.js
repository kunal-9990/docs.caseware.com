module.exports = () => {
    const TOC_SUBTOPIC_CONTAINER = document.querySelector('.toc-subtopics__in-this-article');
    const TOC_SUBTOPIC_NAV = TOC_SUBTOPIC_CONTAINER.querySelector('ul.nav');
    const TOC_CONTENT_CONTAINER = document.querySelector('.toc-content').querySelectorAll('h2');

    if (TOC_CONTENT_CONTAINER.length === 0) {
        TOC_SUBTOPIC_CONTAINER.removeChild(TOC_SUBTOPIC_CONTAINER.querySelector('h5'));
        return;
    }

    // create the sub-toc
    TOC_CONTENT_CONTAINER.forEach((el) => {
        const LI = document.createElement('li');
        const ANCHOR = document.createElement('a');
        const ANCHOR_TEXT = el.id.replace(/[^A-Za-z0-9]+/g, ' ');
        ANCHOR.textContent = ANCHOR_TEXT;
        ANCHOR.setAttribute('href', `#${el.id}`);
        LI.appendChild(ANCHOR);
        TOC_SUBTOPIC_NAV.appendChild(LI);
    });

    $(window).scroll(() => {
        const windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.toc-content h2').each(function updateActiveSubToc(i) {
                if ($(this).position().top <= windscroll - 20) {
                    $('.toc-subtopics__in-this-article ul.nav li.toc-subtopics--active-nav').removeClass('toc-subtopics--active-nav');
                    $('.toc-subtopics__in-this-article ul.nav li').eq(i).addClass('toc-subtopics--active-nav');
                }
            });
        } else {
            $('.toc-subtopics__in-this-article ul.nav li.toc-subtopics--active-nav').removeClass('toc-subtopics--active-nav');
            $('.toc-subtopics__in-this-article ul.nav li:first').addClass('toc-subtopics--active-nav');
        }
    }).scroll();

    /* eslint-disable */
    var waypoint = new Waypoint({
        element: TOC_SUBTOPIC_CONTAINER,
        handler: function(direction) {
          if (direction === 'down' && window.pageYOffset !== 0) {
            TOC_SUBTOPIC_CONTAINER.classList.add('affix');            
          } else {
            TOC_SUBTOPIC_CONTAINER.classList.remove('affix');
          }
        }
    })
    /* eslint-enable */
};
