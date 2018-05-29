var SamplePublic1;
(function (SamplePublic1) {
    var public;
})(SamplePublic1 || (SamplePublic1 = {}));
var SamplePublic2;
(function (SamplePublic2) {
    function public() { }
})(SamplePublic2 || (SamplePublic2 = {}));
var SamplePublic3 = (function () {
    function SamplePublic3() {
    }
    return SamplePublic3;
}());
var SamplePublic4 = (function () {
    function SamplePublic4() {
    }
    Object.defineProperty(SamplePublic4.prototype, "public", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SamplePublic4;
}());
var SamplePublic5 = (function () {
    function SamplePublic5() {
    }
    SamplePublic5.prototype.public = function () { };
    return SamplePublic5;
}());
function methodPublic(public) { }
var public;
//# sourceMappingURL=NoReservedKeywordsTestInput-public.js.map