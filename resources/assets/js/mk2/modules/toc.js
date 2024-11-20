module.exports = () => {
    function UrlExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status != 404;
    }
    // const filter = require('../filter');

    $(".toc__container").html("");


    var loc = window.location.href;
    var pathname = window.location.pathname;
    pathname = pathname.replace(/\/\/+/g, '/');
    var routeComponents = pathname.split("/");



        const urlParams = new URLSearchParams(window.location.search);
        
        var year = routeComponents[1];
        var product = routeComponents[2].toLowerCase();
        var version = routeComponents[3];
        var lang = routeComponents[4];
        var linkPrefix = "/" + year + "/" + product + "/" + version + "/" + lang;
        var region = "";
        if (urlParams.get('region') && (lang !== "nl" && lang !== "de" && lang !== "fr" && lang !== "es")) {
            console.log("got here test file");
            region = "_"+urlParams.get('region');
        }
        else if(lang == "nl") {
            region = "_nl";
        }
        else if(lang == "de") {
            region = "_de";
        }
        else if(lang == "fr") {
            region = "_fr";
        }
        else if(lang == "es") {
            region = "_es";
        }
        //hardcoding which toc to return based on language. currently, NL is the only language to have a properly translated TOC
        //this should be changed so that if a properly translated toc doesn't exist, it defaults to english
        // if(lang == "nl"){
        //     var TOCxml = "/documentation_files/" + year + "/" + product + "/" + version + "/Content/" + lang + "/OnlineOutput.xml";
        // }
        var properlyTranslated = ["en", "nl", "de","fr","es"];
        if (window.location.href.indexOf("SE-Authoring") > -1) {
            console.log("se authoring");
            if (properlyTranslated.includes(lang)) {
                var TOCxml = "/documentation_files/" + year + "/" + product + "/" + version + "/Content/" + lang + "/SE-Authoring-TOC.xml";
            } else {
                var TOCxml = "/documentation_files/" + year + "/" + product + "/" + version + "/Content/en/SE-Authoring-TOC.xml";
            }
        } else {
            if (properlyTranslated.includes(lang)) {
                var TOCxml = "/documentation_files/" + year + "/" + product + "/" + version + "/Content/" + lang + `/Online Output${region}.xml`;
            } else {
                var TOCxml = "/documentation_files/" + year + "/" + product + "/" + version + `/Content/en/Online Output${region}.xml`;
            }
        }
        console.log(TOCxml);

        $.ajax({
            type: "GET",
            url: TOCxml,
            success: function (xml) {
                var ul_main = $('<ul class="toc notranslate">');
                $(xml).find("TocEntry").each(function () {
                    if ($(this).children().length && $(this).parent().is("CatapultToc")) {
                        var subCatList = generateTocTree($(this));
                        var li = $('<li class="toc__category"><a class="chevron" href="#">' + $(this).attr("Title") + '</a>');
                        ul_main.append(li.append(subCatList));
                    }
                });
        
                $(".toc__container").append(ul_main);
        
                // Expand section of current page
                $(".current-page").parent().addClass("toc__topic-wrap--is-expanded");
                $(".current-page").parent().parent().parent().addClass("toc__sub-category-wrap--is-expanded");
        
                $(".current-page").parent().addClass("toc__sub-category-wrap--is-expanded");
                $(".current-page").parent().parent().parent().addClass("toc__sub-category-wrap--is-expanded");
        
                ifSiblingElementExists();
                tocExpandToggle();
                CheckExpandedLists();
        
                if (urlParams.get('region')) {
                    $(".toc__container").find("a").each(function () {
                        var href = $(this).attr('href');
                        if (href) {
                            href += (href.match(/\?/) ? '&' : '?') + "region=" + urlParams.get('region');
                            $(this).attr('href', href);
                        }
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
        
        // Recursive function to generate TOC tree structure
        function generateTocTree(entry) {
            var ul = $('<ul class="toc__sub-category-wrap">');
            entry.children().each(function () {
                var subCatLink = $(this).attr("Link") ? linkPrefix + $(this).attr("Link") : '#';
                var producttags = $(this).attr("conditions") ? $(this).attr("conditions").replace("Product.", "toc__filters--").toLowerCase() + "-js" : '';
        
                // Check if there are nested elements
                if ($(this).children().length) {
                    var topicList = $('<ul class="toc__topic-wrap">');
                    $(this).children().each(function () {
                        var link = $(this).attr("Link") ? linkPrefix + $(this).attr("Link") : '#';
                        var title = $(this).attr("Title");
                        var listItem = '<li class="' + producttags + '"><a href="' + link + '">' + title + '</a></li>';
                        topicList.append(listItem);
                    });
        
                    var li = $('<li class="toc__sub-category"><a class="chevron" href="' + subCatLink + '">' + $(this).attr("Title") + '</a>');
                    ul.append(li.append(topicList));
                } else {
                    var li = $('<li class="toc__sub-category"><a class="chevron" href="' + subCatLink + '">' + $(this).attr("Title") + '</a>');
                    ul.append(li);
                }
            });
            return ul;
        }
        
        // checks to see where to add class to rotate the chevron for expanded toc lists
        function CheckExpandedLists() {
            const CURRENT_PAGE = document.querySelectorAll('.current-page') || null;
            CURRENT_PAGE.forEach(el => {
                el.closest('.toc__sub-category').classList.add('toc__category--is-open');
                el.closest('.toc__category').classList.add('toc__category--is-open');
            });
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
                el.classList.add('toc__category--is-open');
        }


};
