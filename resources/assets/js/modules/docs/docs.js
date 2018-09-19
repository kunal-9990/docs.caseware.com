const SUB_TOPIC_SCROLLSPY = require('./sub-topic-scrollspy');
const TOC = require('./toc');
const DOCS_CONTAINER = require('./grid');
const IMG_MODAL = require('./image-modal');

module.exports = () => {
    SUB_TOPIC_SCROLLSPY();
    TOC();
    DOCS_CONTAINER();

    if (document.querySelector('.image-modal')) {
        IMG_MODAL();
    }
};
