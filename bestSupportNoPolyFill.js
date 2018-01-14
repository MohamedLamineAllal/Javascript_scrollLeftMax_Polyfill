(function (elmProto) {
    elmProto.scrollTopMaxi = function () {
        return this.scrollTop - this.clientHeight;
    };
    elmProto.scrollLeftMaxi = function () {
        return this.scrollLeft - this.clientLeft;
    };
})(Element.prototype);


/*
 use example :

 var element = document.getElementById('el');
 var leftMax = element.scrollLeftMaxi();
 var topMax = element.scrollTopMaxi();
 console.log(leftMax);
 console.log(topMax);

*/