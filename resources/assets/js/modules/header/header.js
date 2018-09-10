const HEADER_MOBILE = require('./header-mobile');
const HEADER_DESKTOP = require('./header-desktop');

module.exports = () => {
    HEADER_MOBILE();
    HEADER_DESKTOP.setup();
};
