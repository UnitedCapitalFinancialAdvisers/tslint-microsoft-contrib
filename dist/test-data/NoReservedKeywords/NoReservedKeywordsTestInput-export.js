var SampleExport3 = (function () {
    function SampleExport3() {
    }
    return SampleExport3;
}());
var SampleExport4 = (function () {
    function SampleExport4() {
    }
    Object.defineProperty(SampleExport4.prototype, "export", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleExport4;
}());
var SampleExport5 = (function () {
    function SampleExport5() {
    }
    SampleExport5.prototype.export = function () { };
    return SampleExport5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-export.js.map