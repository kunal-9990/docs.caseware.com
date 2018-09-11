/* eslint-disable */

module.exports = () => {

    $(".toc__container").html("");

    var ul_main;
    var tocHtml;
    var currentLocation;
    var TOCxml;
    $.ajax({
        type: "GET",
        url: "/cloud-docs-files/productmapping.xml",
        dataType: "xml",
        success: function (prdxml) {
            $.ajax({
                type: "GET",
                url: "/cloud-docs-files/OnlineOutput-26.xml",
                success: function (xml) {
                    var ul_main = $('<ul class="toc">');

                    $(xml).find("TocEntry").each(function () {
                        if ($(this).children().length && $(this).parent().is("CatapultToc")) {
                            var subCatList = $('<ul class="toc__sub-category-wrap">');
                            $(this).children().each(function () {
                                if ($(this).children().length) {
                                    var topicList = $('<ul class="toc__topic-wrap">');
                                    $(this).children().each(function () {
                                        var producttags;
                                        if (($(this).attr("conditions"))) {
                                            producttags = $(this).attr("conditions").replace("Product.", "").toLowerCase();
                                        };
                                        if (producttags) {
                                            topicList.append('<li><a href="'+ $(this).attr("Link") +'">' + $(this).attr("Title") + '</a></li>');
                                        } else {
                                            topicList.append('<li><a href="'+ $(this).attr("Link") +'">' + $(this).attr("Title") + '</a></li>');
                                        }
                                    });
                                    var link;
                                    if ($(this).attr("Link")) {
                                        link = '<a href="' + currentLocation + $(this).attr("Link") + '">';
                                    } else {
                                        link = '';
                                    }
                                    var li = $('<li class="toc__sub-category"><a class="chevron" href="#">' + $(this).attr("Title") + '</a>');

                                    subCatList.append(li.append(topicList));
                                } else {
                                    subCatList.append('<li class="toc__sub-category"><a class="chevron" href="#">' + $(this).attr("Title") + '</a>');
                                }
                            });
                            var li = $('<li class="toc__category"><a class="chevron" href="#">' + $(this).attr("Title") + '</a>');
                            ul_main.append(li.append(subCatList));
                        }
                    });

                    $(".toc__container").append(ul_main);

                    ifSiblingElementExists();

                    tocExpandToggle();
                }
            });
        }
    });

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
            });
        });
    }

    // toggle class that handles rotating chevron
    function toggleParentisExpandClass(el) {
        el.classList.contains('toc__category--is-open')
            ? el.classList.remove('toc__category--is-open')
            : el.classList.add('toc__category--is-open')
    }
};
