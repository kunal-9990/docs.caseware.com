const SUB_TOPIC_SCROLLSPY = require('./sub-topic-scrollspy');
const TOC = require('./toc');
const DOCS_CONTAINER = require('./grid');

module.exports = () => {
    SUB_TOPIC_SCROLLSPY();
    TOC();
    DOCS_CONTAINER();
};
