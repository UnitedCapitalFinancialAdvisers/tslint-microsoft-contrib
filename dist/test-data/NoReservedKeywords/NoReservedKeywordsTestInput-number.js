var SampleNumber1;
(function (SampleNumber1) {
    var number;
})(SampleNumber1 || (SampleNumber1 = {}));
var SampleNumber2;
(function (SampleNumber2) {
    function number() { }
})(SampleNumber2 || (SampleNumber2 = {}));
var SampleNumber3 = (function () {
    function SampleNumber3() {
    }
    return SampleNumber3;
}());
var SampleNumber4 = (function () {
    function SampleNumber4() {
    }
    Object.defineProperty(SampleNumber4.prototype, "number", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleNumber4;
}());
var SampleNumber5 = (function () {
    function SampleNumber5() {
        this.func = function (number) { };
    }
    SampleNumber5.prototype.number = function () { };
    SampleNumber5.prototype.method = function (number) { };
    return SampleNumber5;
}());
function methodNumber(number) { }
var number;
//# sourceMappingURL=NoReservedKeywordsTestInput-number.js.map