
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

require('./vendor/noframework.waypoints');

// Polyfills
require('./polyfill');

const HEADER = require('./modules/header/header');
const DOCS = require('./modules/docs/docs');
const BACK_TO_TOP = require('./modules/back-to-top');
const SEARCH = require('./modules/search');
const USER_FEEDBACK = require('./modules/user-feedback');
const LAYOUT_GRID = require('./modules/grid');
const TOC = require('./modules/toc');
const REDIRECTS = require('./modules/redirects');
const COOKIE_CONSENT = require('./modules/cookie-consent');

$(document).ready(() => {
    
    // cookie consent notification
    if(document.querySelector('.cookie')) {
        COOKIE_CONSENT();
    }

    // nav init
    if (document.querySelector('header.header')) {
        HEADER();
    }

    // documentation page
    if (document.querySelector('.documentation')) {
        DOCS();
    }

    // back to top button
    if (document.querySelector('.back-to-top')) {
        BACK_TO_TOP();
    }

    // back to top button
    if (document.querySelector('.search-page')) {
        SEARCH();
    }

    // user feedback
    if (document.querySelector('.docs__user-feedback')) {
        USER_FEEDBACK();
    }

    // for switching between full width and contained width
    LAYOUT_GRID();

    // build the toc
    if (document.querySelector('.toc__container')) {
        TOC();
    }

    if (document.querySelector('.helpaccordiancol')) {
        REDIRECTS();
    }


      // javascript for anchor based redirects:
      if (window.location.pathname == "/2020/webapps/31/en/Engagements/Template-and-Authoring/Manage-the-firm-template.htm" && window.location.hash == "#Updatethefirmtemplate") {
          window.location.replace('https://docs.caseware.com/latest/webapps/en/Engagements/Template-and-Authoring/Update-the-firm-template.htm')
      }
      if (window.location.pathname == "/2020/webapps/31/en/Explore/Whats-New/whats-new-audit-winter-2020.htm" && window.location.hash == "#Simple-Electronic-Signature") {
          window.location.replace('https://docs.caseware.com/latest/webapps/en/Explore/Whats-New/Release-history-Audit-Winter-2020.htm#Simple-Electronic-Signature')
      }
});
