const Header = {
    langDropdown: document.querySelector('.header__lang-picker--js'),
    headerNav: document.querySelector('.header__nav'),

    setup() {
        this.langDropdown.addEventListener('click', this.toggleLangDropdown.bind(this));
    },

    toggleLangDropdown(event) {
        const langToggle = this.headerNav.classList;
        event.preventDefault();
        langToggle.contains('lang-list--is-open')
            ? langToggle.remove('lang-list--is-open')
            : langToggle.add('lang-list--is-open');
    },
};

module.exports = Header;
