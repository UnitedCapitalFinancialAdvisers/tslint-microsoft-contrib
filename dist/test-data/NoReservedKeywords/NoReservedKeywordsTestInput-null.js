var SampleNull3 = (function () {
    function SampleNull3() {
    }
    return SampleNull3;
}());
var SampleNull4 = (function () {
    function SampleNull4() {
    }
    Object.defineProperty(SampleNull4.prototype, "null", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleNull4;
}());
var SampleNull5 = (function () {
    function SampleNull5() {
    }
    SampleNull5.prototype.null = function () { };
    return SampleNull5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-null.js.map