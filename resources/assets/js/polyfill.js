// NodeList.prototype.forEach() (IE support)
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Element.closest() (IE support)
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1); 
        return null;
    };
}

// includes string method polyfill (IE support)
if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
      value: function(search, start) {
        if (typeof start !== 'number') {
          start = 0
        }
        
        if (start + search.length > this.length) {
          return false
        } else {
          return this.indexOf(search, start) !== -1
        }
      }
    })
  }