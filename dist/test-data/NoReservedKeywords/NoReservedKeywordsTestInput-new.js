var SampleNew3 = (function () {
    function SampleNew3() {
    }
    return SampleNew3;
}());
var SampleNew4 = (function () {
    function SampleNew4() {
    }
    Object.defineProperty(SampleNew4.prototype, "new", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleNew4;
}());
var SampleNew5 = (function () {
    function SampleNew5() {
    }
    SampleNew5.prototype.new = function () { };
    return SampleNew5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-new.js.map