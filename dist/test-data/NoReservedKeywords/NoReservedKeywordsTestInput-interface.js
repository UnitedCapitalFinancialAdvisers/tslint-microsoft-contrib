var SampleInterface1;
(function (SampleInterface1) {
    var interface;
})(SampleInterface1 || (SampleInterface1 = {}));
var SampleInterface2;
(function (SampleInterface2) {
    function interface() { }
})(SampleInterface2 || (SampleInterface2 = {}));
var SampleInterface3 = (function () {
    function SampleInterface3() {
    }
    return SampleInterface3;
}());
var SampleInterface4 = (function () {
    function SampleInterface4() {
    }
    Object.defineProperty(SampleInterface4.prototype, "interface", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleInterface4;
}());
var SampleInterface5 = (function () {
    function SampleInterface5() {
    }
    SampleInterface5.prototype.interface = function () { };
    return SampleInterface5;
}());
function methodInterface(interface) { }
var interface;
//# sourceMappingURL=NoReservedKeywordsTestInput-interface.js.map