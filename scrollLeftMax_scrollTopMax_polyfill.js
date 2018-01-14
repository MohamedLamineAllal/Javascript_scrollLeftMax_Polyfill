/** 
 * support go from IE8+, the other popular browser are well supported safari from 5.1. others no mention 
 * 
 * the support depend on Object.defineProperties() support.
 * 
 * if that's a problem you can just add the functions separatly no polyfill. 
 * look at  bestSupportNoPolyFill.js file 
 *  
 */

(function(elmProto){
    if ('scrollTopMax' in elmProto) {
        return;
    }
    Object.defineProperties(elmProto, {
        'scrollTopMax': {
            get: function scrollTopMax() {
              return this.scrollHeight - this.clientTop;
            }
        },
        'scrollLeftMax': {
            get: function scrollLeftMax() {
              return this.scrollWidth - this.clientLeft;
            }
        }
    });
}
)(Element.prototype);