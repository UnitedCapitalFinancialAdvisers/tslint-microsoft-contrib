var SampleFinally3 = (function () {
    function SampleFinally3() {
    }
    return SampleFinally3;
}());
var SampleFinally4 = (function () {
    function SampleFinally4() {
    }
    Object.defineProperty(SampleFinally4.prototype, "finally", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleFinally4;
}());
var SampleFinally5 = (function () {
    function SampleFinally5() {
    }
    SampleFinally5.prototype.finally = function () { };
    return SampleFinally5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-finally.js.map