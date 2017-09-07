var SamplePrivate1;
(function (SamplePrivate1) {
    var private;
})(SamplePrivate1 || (SamplePrivate1 = {}));
var SamplePrivate2;
(function (SamplePrivate2) {
    function private() { }
})(SamplePrivate2 || (SamplePrivate2 = {}));
var SamplePrivate3 = (function () {
    function SamplePrivate3() {
    }
    return SamplePrivate3;
}());
var SamplePrivate4 = (function () {
    function SamplePrivate4() {
    }
    Object.defineProperty(SamplePrivate4.prototype, "private", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SamplePrivate4;
}());
var SamplePrivate5 = (function () {
    function SamplePrivate5() {
    }
    SamplePrivate5.prototype.private = function () { };
    return SamplePrivate5;
}());
function methodPrivate(private) { }
var private;
//# sourceMappingURL=NoReservedKeywordsTestInput-private.js.map