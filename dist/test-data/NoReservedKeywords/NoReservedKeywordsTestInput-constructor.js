var WrapperConstructor;
(function (WrapperConstructor) {
    var constructor;
    (function (constructor_1) {
        var constructor = (function () {
            function constructor() {
            }
            return constructor;
        }());
    })(constructor || (constructor = {}));
})(WrapperConstructor || (WrapperConstructor = {}));
var SampleConstructor1;
(function (SampleConstructor1) {
    var constructor;
})(SampleConstructor1 || (SampleConstructor1 = {}));
var SampleConstructor2;
(function (SampleConstructor2) {
    function constructor() { }
})(SampleConstructor2 || (SampleConstructor2 = {}));
var SampleConstructor4 = (function () {
    function SampleConstructor4() {
    }
    Object.defineProperty(SampleConstructor4.prototype, "constructor", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleConstructor4;
}());
var SampleConstructor5 = (function () {
    function SampleConstructor5() {
        this.func = function (constructor) { };
    }
    SampleConstructor5.prototype.method = function (constructor) { };
    return SampleConstructor5;
}());
function methodConstructor(constructor) { }
var constructor;
//# sourceMappingURL=NoReservedKeywordsTestInput-constructor.js.map