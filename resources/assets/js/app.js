
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

const HEADER = require('./modules/header');
const TOC = require('./modules/toc');
const TOC_SUBNAV = require('./modules/toc-subnav');

$(document).ready(() => {
    // nav init
    if (document.querySelector('header.header')) {
        HEADER.setup();
    }

    // toc js init (might split up files later if it gets too big)
    if (document.querySelector('.toc__container')) {
        TOC();
    }

    // toc subnav
    if (document.querySelector('.toc-topics')) {
        TOC_SUBNAV();
    }
});
