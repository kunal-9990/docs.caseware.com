
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
const DOCS = require('./modules/docs/docs');

$(document).ready(() => {
    // nav init
    if (document.querySelector('header.header')) {
        HEADER.setup();
    }

    // documentation page
    if (document.querySelector('.documentation')) {
        DOCS();
    }
});
