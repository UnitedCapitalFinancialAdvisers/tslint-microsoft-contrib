var SampleThrow3 = (function () {
    function SampleThrow3() {
    }
    return SampleThrow3;
}());
var SampleThrow4 = (function () {
    function SampleThrow4() {
    }
    Object.defineProperty(SampleThrow4.prototype, "throw", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleThrow4;
}());
var SampleThrow5 = (function () {
    function SampleThrow5() {
    }
    SampleThrow5.prototype.throw = function () { };
    return SampleThrow5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-throw.js.map