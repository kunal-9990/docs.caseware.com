module.exports = () => {

    // const filter = require('../filter');

    $(".toc__container").html("");

    var loc = window.location.href;
    var pathname = new URL(loc).pathname;
    pathname = pathname.replace(/\/\/+/g, '/');
    var routeComponents = pathname.split("/");
    var year = routeComponents[1];
    var product = routeComponents[2];
    var version = routeComponents[3];
    var lang = routeComponents[4];
    // var linkPrefix = "/docsmk2/" + year + "/" + product + "/" + version + "/" + lang;
    var linkPrefix = "/" + year + "/" + product + "/" + version + "/" + lang;
    var TOCxml = "/documentation_files/" + year + "/" + product + "/" + version + "/OnlineOutput.xml";

    $.ajax({
        type: "GET",
        url: TOCxml,
        success: function (xml) {

            var ul_main = $('<ul class="toc notranslate">');
            $(xml).find("TocEntry").each(function () {
                if ($(this).children().length && $(this).parent().is("CatapultToc")) {
                    var subCatList = $('<ul class="toc__sub-category-wrap">');
                    $(this).children().each(function () {
                        if ($(this).children().length) {
                            var topicList = $('<ul class="toc__topic-wrap">');
                            $(this).children().each(function () {
                                var classes;
                                if (($(this).attr("conditions"))) {
                                    producttags = $(this).attr("conditions").replace("Product.", "toc__filters--").toLowerCase() + "-js";
                                }
                                else {
                                    producttags= " ";
                                };
                                
                                if(loc.includes($(this).attr("Link").replace(".htm",""))){
                                    topicList.append('<li class="current-page ' + producttags + '"><a href="' + linkPrefix + $(this).attr("Link") + '">' + $(this).attr("Title") + '</a></li>');
                                }
                                else{
                                    topicList.append('<li class="' + producttags + '"><a href="' + linkPrefix + $(this).attr("Link") + '">' + $(this).attr("Title") + '</a></li>');                                    
                                }

                            });
                            var link;
                            if ($(this).attr("Link")) {
                                link = '<a href="' + linkPrefix + $(this).attr("Link") + '">';
                            } else {
                                link = '';
                            }
                            var li = $('<li class="toc__sub-category"><a class="chevron" href="' + linkPrefix + $(this).attr("Link") + '">' + $(this).attr("Title") + '</a>');

                            subCatList.append(li.append(topicList));
                        } else {
                            subCatList.append('<li class="toc__sub-category"><a class="chevron" href="' + linkPrefix + $(this).attr("Link") + '">' + $(this).attr("Title") + '</a>');
                        }
                    });
                    var li = $('<li class="toc__category"><a class="chevron" href="#">' + $(this).attr("Title") + '</a>');
                    ul_main.append(li.append(subCatList));
                }
            });

            $(".toc__container").append(ul_main);
            
            //expand section of current page
            $(".current-page").parent().addClass("toc__topic-wrap--is-expanded");
            $(".current-page").parent().parent().parent().addClass("toc__sub-category-wrap--is-expanded");

            ifSiblingElementExists();

            tocExpandToggle();

            CheckExpandedLists();
        }
    });

    // checks to see where to add class to rotate the chevron for expanded toc lists
    // TODO: might have to polyfill .closest() for IE`
    function CheckExpandedLists() {
        const CURRENT_PAGE = document.querySelectorAll('.current-page') || null;
        CURRENT_PAGE.forEach(el => {
            el.closest('.toc__sub-category').classList.add('toc__category--is-open');
            el.closest('.toc__category').classList.add('toc__category--is-open');
        })
        
    }


    // if an anchor in the toc doesn't have a ul as a next sibling
    // remove the chevron
    function ifSiblingElementExists() {
        const tocLinks = document.querySelectorAll('.toc__container a');
        tocLinks.forEach((btn) => {
            if (btn.nextElementSibling === null) {
                btn.classList.remove('chevron');
            }
        });
    }

    // toc event listener to expand and collapse navs
    function tocExpandToggle() {
        const tocLinks = document.querySelectorAll('.toc__container a');

        tocLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                const nextElementSibling = event.target.nextElementSibling;
                const thisElParentNode = event.target.parentNode;
                
                if (link.classList.contains('chevron')) {
                    event.preventDefault();

                    if (nextElementSibling !== null) {
                        const nextElSiblingClass = nextElementSibling.classList;

                        if (nextElSiblingClass.contains('toc__sub-category-wrap')) {
                            if (nextElSiblingClass.contains('toc__sub-category-wrap--is-expanded')) {
                                nextElSiblingClass.remove('toc__sub-category-wrap--is-expanded');
                                toggleParentisExpandClass(thisElParentNode);
                            } else {
                                nextElSiblingClass.add('toc__sub-category-wrap--is-expanded');
                                toggleParentisExpandClass(thisElParentNode);
                            }
                        } else if (nextElSiblingClass.contains('toc__topic-wrap')) {
                            if (nextElSiblingClass.contains('toc__topic-wrap--is-expanded')) {
                                nextElSiblingClass.remove('toc__topic-wrap--is-expanded');
                                toggleParentisExpandClass(thisElParentNode);
                            } else {
                                nextElSiblingClass.add('toc__topic-wrap--is-expanded');
                                toggleParentisExpandClass(thisElParentNode);
                            }
                        }
                    }
                }
            });
        });
    }

    // toggle class that handles rotating chevron
    function toggleParentisExpandClass(el) {
        el.classList.contains('toc__category--is-open') ?
            el.classList.remove('toc__category--is-open') :
            el.classList.add('toc__category--is-open')
    }

    
};