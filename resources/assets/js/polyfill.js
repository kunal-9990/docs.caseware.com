// NodeList.prototype.forEach() (IE support)
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

console.log('polyfill');
