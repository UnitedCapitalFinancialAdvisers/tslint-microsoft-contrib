var SampleDefault3 = (function () {
    function SampleDefault3() {
    }
    return SampleDefault3;
}());
var SampleDefault4 = (function () {
    function SampleDefault4() {
    }
    Object.defineProperty(SampleDefault4.prototype, "default", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleDefault4;
}());
var SampleDefault5 = (function () {
    function SampleDefault5() {
    }
    SampleDefault5.prototype.default = function () { };
    return SampleDefault5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-default.js.map