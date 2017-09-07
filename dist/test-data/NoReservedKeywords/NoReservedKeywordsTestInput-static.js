var SampleStatic1;
(function (SampleStatic1) {
    var static;
})(SampleStatic1 || (SampleStatic1 = {}));
var SampleStatic2;
(function (SampleStatic2) {
    function static() { }
})(SampleStatic2 || (SampleStatic2 = {}));
var SampleStatic3 = (function () {
    function SampleStatic3() {
    }
    return SampleStatic3;
}());
var SampleStatic4 = (function () {
    function SampleStatic4() {
    }
    Object.defineProperty(SampleStatic4.prototype, "static", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleStatic4;
}());
var SampleStatic5 = (function () {
    function SampleStatic5() {
    }
    SampleStatic5.prototype.static = function () { };
    return SampleStatic5;
}());
function methodStatic(static) { }
var static;
//# sourceMappingURL=NoReservedKeywordsTestInput-static.js.map