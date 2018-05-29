var SampleLet1;
(function (SampleLet1) {
    var let;
})(SampleLet1 || (SampleLet1 = {}));
var SampleLet2;
(function (SampleLet2) {
    function let() { }
})(SampleLet2 || (SampleLet2 = {}));
var SampleLet3 = (function () {
    function SampleLet3() {
    }
    return SampleLet3;
}());
var SampleLet4 = (function () {
    function SampleLet4() {
    }
    Object.defineProperty(SampleLet4.prototype, "let", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleLet4;
}());
var SampleLet5 = (function () {
    function SampleLet5() {
    }
    SampleLet5.prototype.let = function () { };
    return SampleLet5;
}());
function methodLet(let) { }
var let;
//# sourceMappingURL=NoReservedKeywordsTestInput-let.js.map