var SampleAny1;
(function (SampleAny1) {
    var any;
})(SampleAny1 || (SampleAny1 = {}));
var SampleAny2;
(function (SampleAny2) {
    function any() { }
})(SampleAny2 || (SampleAny2 = {}));
var SampleAny3 = (function () {
    function SampleAny3() {
    }
    return SampleAny3;
}());
var SampleAny4 = (function () {
    function SampleAny4() {
    }
    Object.defineProperty(SampleAny4.prototype, "any", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleAny4;
}());
var SampleAny5 = (function () {
    function SampleAny5() {
        this.func = function (any) { };
    }
    SampleAny5.prototype.any = function () { };
    SampleAny5.prototype.method = function (any) { };
    return SampleAny5;
}());
function methodAny(any) { }
var any;
//# sourceMappingURL=NoReservedKeywordsTestInput-any.js.map