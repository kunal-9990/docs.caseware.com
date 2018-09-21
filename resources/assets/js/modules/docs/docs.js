const SUB_TOPIC_SCROLLSPY = require('./sub-topic-scrollspy');
const TOC = require('./toc');
const DOCS_CONTAINER = require('./grid');
const IMG_MODAL = require('./image-modal');
const DOWNLOAD_PDF = require('./download-pdf');

module.exports = () => {
    SUB_TOPIC_SCROLLSPY();
    TOC();
    DOCS_CONTAINER();

    // ensure there are pdf downloads available
    if (document.querySelector('.downloadLink')) {
        DOWNLOAD_PDF();
    }

    if (document.querySelector('.image-modal')) {
        IMG_MODAL();
    }
};
