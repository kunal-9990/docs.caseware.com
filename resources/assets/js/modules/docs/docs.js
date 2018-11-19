const SUB_TOPIC_SCROLLSPY = require('./sub-topic-scrollspy');
const TOC = require('./toc');
const DOCS_CONTAINER = require('./grid');
const IMG_MODAL = require('./image-modal');
const DOWNLOAD_PDF = require('./download-pdf');
const VIDEO_IFRAME = require('./video-iframe');
const REDIRECTS = require('./redirects');
const FILTER = require('./filter');

module.exports = () => {
    TOC();
    SUB_TOPIC_SCROLLSPY();
    DOCS_CONTAINER();
    FILTER();

    if (document.querySelector('.downloadLink')) {
        DOWNLOAD_PDF();
    }

    if (document.querySelector('.image-modal')) {
        IMG_MODAL();
    }

    if (document.querySelector('#vid') || document.querySelector('#vidcenter')) {
        VIDEO_IFRAME();
    }

    if (document.querySelector('.helpaccordiancol')) {
        REDIRECTS();
    }
};
