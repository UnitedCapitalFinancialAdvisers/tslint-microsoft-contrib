var SampleConst3 = (function () {
    function SampleConst3() {
    }
    return SampleConst3;
}());
var SampleConst4 = (function () {
    function SampleConst4() {
    }
    Object.defineProperty(SampleConst4.prototype, "const", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleConst4;
}());
var SampleConst5 = (function () {
    function SampleConst5() {
    }
    SampleConst5.prototype.const = function () { };
    return SampleConst5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-const.js.map