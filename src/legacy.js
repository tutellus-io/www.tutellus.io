 /* eslint-disable */

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(stringBuscada, posicion) {
        posicion = posicion || 0;
        return this.indexOf(stringBuscada, posicion) === posicion;
    };
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    // eslint-disable-next-line no-extend-native
    String.prototype.padStart = (targetLength, padString) => {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        targetLength = targetLength - this.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
        }
        return padString.slice(0,targetLength) + String(this);
    };
}
