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
                
                // Recursive function to process nested TocEntries
                function processTocEntries(tocEntries, parentUl) {
                    tocEntries.each(function () {
                        var tocEntry = $(this);
                        var li = $('<li class="toc__category">');
                        
                        var title = tocEntry.attr('Title');
                        var link = tocEntry.attr('Link');
                        var hasChildren = tocEntry.children('TocEntry').length > 0;
        
                        var producttags = "";
        
                        // If the current TocEntry has a link, create an anchor tag with the right classes
                        if (link) {
                            if (link && loc.includes(link.replace(".htm", ""))) {
                                li.append('<a href="' + linkPrefix + link + '" class="current-page ' + producttags + '"><span class="chevron"></span>' + title + '</a>');
                            } else {
                                li.append('<a href="' + linkPrefix + link + '" class="' + producttags + '"><span class="chevron"></span>' + title + '</a>');
                            }
                        } else {
                            li.append('<a href="#" class="' + producttags + '"><span class="chevron"></span>' + title + '</a>');
                        }
        
                        // If the current TocEntry has children, process them recursively
                        if (hasChildren) {
                            var subList = $('<ul class="toc__sub-category-wrap">');
                            processTocEntries(tocEntry.children('TocEntry'), subList); // Recursively process child entries
                            li.append(subList); // Append sublist to the current li
                        }
        
                        // Append the li to the parent ul
                        parentUl.append(li);
                    });
                }
        
                // Start processing the XML from the root level
                processTocEntries($(xml).find('TocEntry'), ul_main);
        
                $(".toc__container").append(ul_main);
        
                // Expand section of current page
                $(".current-page").parent().addClass("toc__topic-wrap--is-expanded");
                $(".current-page").parent().parent().parent().addClass("toc__sub-category-wrap--is-expanded");
                $(".current-page").parent().addClass("toc__sub-category-wrap--is-expanded");
                $(".current-page").parent().parent().parent().addClass("toc__sub-category-wrap--is-expanded");
        
                ifSiblingElementExists();
                tocExpandToggle();
                CheckExpandedLists();
        
                // Add region parameter to links
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
        
        // checks to see where to add class to rotate the chevron for expanded toc lists
        function CheckExpandedLists() {
            const CURRENT_PAGE = document.querySelectorAll('.current-page') || null;
            CURRENT_PAGE.forEach(el => {
                el.closest('.toc__sub-category').classList.add('toc__category--is-open');
                el.closest('.toc__category').classList.add('toc__category--is-open');
            });
        }
        
        // if an anchor in the toc doesn't have a ul as a next sibling, remove the chevron
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
                                    toggleChevron(event.target, false);
                                } else {
                                    nextElSiblingClass.add('toc__sub-category-wrap--is-expanded');
                                    toggleChevron(event.target, true);
                                }
                            }
                        }
                    }
                });
            });
        }
        
        // toggle class that handles rotating chevron
        function toggleChevron(el, isExpanded) {
            const chevron = el.querySelector('.chevron');
            if (isExpanded) {
                chevron.classList.add('expanded');  // You can customize the chevron icon or rotate it here
            } else {
                chevron.classList.remove('expanded');
            }
        }
        
        // toggle class that handles rotating chevron
        function toggleParentisExpandClass(el) {
            el.classList.contains('toc__category--is-open') ?
                el.classList.remove('toc__category--is-open') :
                el.classList.add('toc__category--is-open');
        }
        


};
