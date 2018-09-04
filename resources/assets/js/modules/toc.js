module.exports = () => {
    const tocLinks = document.querySelectorAll('.toc__container a');

    tocLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const nextElementSibling = event.target.nextElementSibling;
            if (nextElementSibling !== null) {
                const nextElementSiblingClassList = nextElementSibling.classList;

                if (nextElementSiblingClassList.contains('toc__sub-category-wrap')) {
                    nextElementSiblingClassList.contains('toc__sub-category-wrap--is-expanded')
                        ? nextElementSiblingClassList.remove('toc__sub-category-wrap--is-expanded')
                        : nextElementSiblingClassList.add('toc__sub-category-wrap--is-expanded');
                } else if (nextElementSiblingClassList.contains('toc__topic-wrap')) {
                    nextElementSiblingClassList.contains('toc__topic-wrap--is-expanded')
                        ? nextElementSiblingClassList.remove('toc__topic-wrap--is-expanded')
                        : nextElementSiblingClassList.add('toc__topic-wrap--is-expanded');
                }
            }
        });
    });
};
