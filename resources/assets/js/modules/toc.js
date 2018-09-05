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

                    const tocLinks = document.querySelectorAll('.toc__container a');

                    tocLinks.forEach((link) => {
                        link.addEventListener('click', (event) => {
                            event.preventDefault();
                            const nextElementSibling = event.target.nextElementSibling;
                            if (nextElementSibling !== null) {
                                const nextElementSiblingClassList = nextElementSibling.classList;

                                if (nextElementSiblingClassList.contains('toc__sub-category-wrap')) {
                                    nextElementSiblingClassList.contains('toc__sub-category-wrap--is-expanded') ?
                                        nextElementSiblingClassList.remove('toc__sub-category-wrap--is-expanded') :
                                        nextElementSiblingClassList.add('toc__sub-category-wrap--is-expanded');
                                } else if (nextElementSiblingClassList.contains('toc__topic-wrap')) {
                                    nextElementSiblingClassList.contains('toc__topic-wrap--is-expanded') ?
                                        nextElementSiblingClassList.remove('toc__topic-wrap--is-expanded') :
                                        nextElementSiblingClassList.add('toc__topic-wrap--is-expanded');
                                }
                            }
                        });
                    });
                }
            });
        }
    });
};