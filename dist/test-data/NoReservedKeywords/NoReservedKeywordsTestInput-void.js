var SampleVoid3 = (function () {
    function SampleVoid3() {
    }
    return SampleVoid3;
}());
var SampleVoid4 = (function () {
    function SampleVoid4() {
    }
    Object.defineProperty(SampleVoid4.prototype, "void", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleVoid4;
}());
var SampleVoid5 = (function () {
    function SampleVoid5() {
    }
    SampleVoid5.prototype.void = function () { };
    return SampleVoid5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-void.js.map