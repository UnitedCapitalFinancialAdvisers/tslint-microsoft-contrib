var WrapperOf;
(function (WrapperOf) {
    var of;
    (function (of_1) {
        var of = (function () {
            function of() {
            }
            return of;
        }());
    })(of || (of = {}));
})(WrapperOf || (WrapperOf = {}));
var SampleOf1;
(function (SampleOf1) {
    var of;
})(SampleOf1 || (SampleOf1 = {}));
var SampleOf2;
(function (SampleOf2) {
    function of() { }
})(SampleOf2 || (SampleOf2 = {}));
var SampleOf3 = (function () {
    function SampleOf3() {
    }
    return SampleOf3;
}());
var SampleOf4 = (function () {
    function SampleOf4() {
    }
    Object.defineProperty(SampleOf4.prototype, "of", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleOf4;
}());
var SampleOf5 = (function () {
    function SampleOf5() {
        this.func = function (of) { };
    }
    SampleOf5.prototype.of = function () { };
    SampleOf5.prototype.method = function (of) { };
    return SampleOf5;
}());
function methodOf(of) { }
var of;
//# sourceMappingURL=NoReservedKeywordsTestInput-of.js.map