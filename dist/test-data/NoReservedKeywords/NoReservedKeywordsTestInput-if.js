var SampleIf3 = (function () {
    function SampleIf3() {
    }
    return SampleIf3;
}());
var SampleIf4 = (function () {
    function SampleIf4() {
    }
    Object.defineProperty(SampleIf4.prototype, "if", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleIf4;
}());
var SampleIf5 = (function () {
    function SampleIf5() {
    }
    SampleIf5.prototype.if = function () { };
    return SampleIf5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-if.js.map