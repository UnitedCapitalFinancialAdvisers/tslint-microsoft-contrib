var SampleExtends3 = (function () {
    function SampleExtends3() {
    }
    return SampleExtends3;
}());
var SampleExtends4 = (function () {
    function SampleExtends4() {
    }
    Object.defineProperty(SampleExtends4.prototype, "extends", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleExtends4;
}());
var SampleExtends5 = (function () {
    function SampleExtends5() {
    }
    SampleExtends5.prototype.extends = function () { };
    return SampleExtends5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-extends.js.map