const SUB_TOPIC_SCROLLSPY = require('./sub-topic-scrollspy');
const TOC = require('./toc');
const DOCS_CONTAINER = require('./grid');
const IMG_MODAL = require('./image-modal');
const DOWNLOAD_PDF = require('./download-pdf');
const VIDEO_IFRAME = require('./video-iframe');
const FEEDBACK = require('./user-feedback');
const REDIRECTS = require('./redirects');
const FILTER = require('./filter');

module.exports = () => {
    SUB_TOPIC_SCROLLSPY();
    TOC();
    DOCS_CONTAINER();
    FEEDBACK();
    REDIRECTS();
    FILTER();

    if (document.querySelector('.downloadLink')) {
        DOWNLOAD_PDF();
    }

    if (document.querySelector('.image-modal')) {
        IMG_MODAL();
    }

    if (document.querySelector('.docs__video-iframe-wrap')) {
        VIDEO_IFRAME();
    }
};
