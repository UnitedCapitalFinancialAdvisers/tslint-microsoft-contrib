var SampleSuper3 = (function () {
    function SampleSuper3() {
    }
    return SampleSuper3;
}());
var SampleSuper4 = (function () {
    function SampleSuper4() {
    }
    Object.defineProperty(SampleSuper4.prototype, "super", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleSuper4;
}());
var SampleSuper5 = (function () {
    function SampleSuper5() {
    }
    SampleSuper5.prototype.super = function () { };
    return SampleSuper5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-super.js.map