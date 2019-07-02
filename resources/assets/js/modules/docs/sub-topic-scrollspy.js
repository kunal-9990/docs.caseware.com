module.exports = () => {
    const SUB_TOC_CONTAINER = document.querySelector('.toc-subtopics');
    const TOC_SUBTOPIC_CONTAINER = document.querySelector('.toc-subtopics__in-this-article');
    const TOC_SUBTOPIC_NAV = TOC_SUBTOPIC_CONTAINER.querySelector('ul.nav');
    const TOC_CONTENT_CONTAINER = document.querySelector('.toc-content').querySelectorAll('h2');

    if (TOC_CONTENT_CONTAINER.length === 0) {
        TOC_SUBTOPIC_CONTAINER.removeChild(TOC_SUBTOPIC_CONTAINER.querySelector('h5'));
        return;
    }

    // create the sub-toc
    TOC_CONTENT_CONTAINER.forEach((el) => {
        let EL_ID = null;
        const LI = document.createElement('li');
        const ANCHOR = document.createElement('a');
        let ANCHOR_TEXT = null;

        if (el.innerHTML) {
            EL_ID = el.getAttribute("id");
            ANCHOR_TEXT = el.textContent;
            ANCHOR.textContent = ANCHOR_TEXT;
            ANCHOR.setAttribute('href', `#${EL_ID}`);
            el.setAttribute('id', EL_ID);
        } else {
            EL_ID = el.id || el.querySelector('a[name]').getAttribute('name');
            ANCHOR_TEXT = EL_ID.replace(/[^A-Za-z0-9]+/g, ' ');
            ANCHOR.textContent = ANCHOR_TEXT;
            ANCHOR.setAttribute('href', `#${EL_ID}`);
        }

        LI.appendChild(ANCHOR);
        TOC_SUBTOPIC_NAV.appendChild(LI);
    });

    $(document).ready(() => {
        if (window.location.hash) {
            const anchor = document.getElementById(window.location.hash.substr(1));
            if (anchor) {
                SUB_TOC_CONTAINER.classList.add('affix');
                anchor.scrollIntoView();
            }
        }
    });

    $(window).scroll(() => {
        const windscroll = $(window).scrollTop();
        if (windscroll >= 250) {
            SUB_TOC_CONTAINER.classList.add('affix');
            $('.toc-content h2').each(function updateActiveSubToc(i) {
                if ($(this).position().top <= windscroll - 20) {
                    $('.toc-subtopics__in-this-article ul.nav li.toc-subtopics--active-nav').removeClass('toc-subtopics--active-nav');
                    $('.toc-subtopics__in-this-article ul.nav li').eq(i).addClass('toc-subtopics--active-nav');
                }
            });
        } else {
            SUB_TOC_CONTAINER.classList.remove('affix');
            $('.toc-subtopics__in-this-article ul.nav li.toc-subtopics--active-nav').removeClass('toc-subtopics--active-nav');
            $('.toc-subtopics__in-this-article ul.nav li:first').addClass('toc-subtopics--active-nav');
        }
    }).scroll();
};
