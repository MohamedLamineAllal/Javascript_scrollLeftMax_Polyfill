# Javascript_scrollLeftMax_Polyfill

A polyfill for Element.prototype.scrollLeftMax() and Element.prototype.scrollTopMax()functions for javascript (supporting IE8+, chrom, opera, safari)) (only mozilla implement it natively). 


  support go from IE8+, the other popular browsers are well supported safari from 5.1. others not to mention.
  
  the support depend on Object.defineProperties() support.
  
    look here "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#compatNote_1"

  if that's a problem you can just add the functions separatly no polyfill. 
  look at  bestSupportNoPolyFill.js file 


here the polyfill
  `(function(elmProto){
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
`

here the defining the function separatly solution that have a great support IE6+
 (i added just an 'i' in the end, so no conflict with the existing one in mozilla)
`
(function (elmProto) {
    elmProto.scrollTopMaxi = function () {
        return this.scrollTop - this.clientHeight;
    };
    elmProto.scrollLeftMaxi = function () {
        return this.scrollLeft - this.clientLeft;
    };
})(Element.prototype);
`
