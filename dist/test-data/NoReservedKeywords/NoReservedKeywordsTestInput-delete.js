var SampleDelete3 = (function () {
    function SampleDelete3() {
    }
    return SampleDelete3;
}());
var SampleDelete4 = (function () {
    function SampleDelete4() {
    }
    Object.defineProperty(SampleDelete4.prototype, "delete", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleDelete4;
}());
var SampleDelete5 = (function () {
    function SampleDelete5() {
    }
    SampleDelete5.prototype.delete = function () { };
    return SampleDelete5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-delete.js.map