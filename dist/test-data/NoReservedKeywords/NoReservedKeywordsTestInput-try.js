var SampleTry3 = (function () {
    function SampleTry3() {
    }
    return SampleTry3;
}());
var SampleTry4 = (function () {
    function SampleTry4() {
    }
    Object.defineProperty(SampleTry4.prototype, "try", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleTry4;
}());
var SampleTry5 = (function () {
    function SampleTry5() {
    }
    SampleTry5.prototype.try = function () { };
    return SampleTry5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-try.js.map