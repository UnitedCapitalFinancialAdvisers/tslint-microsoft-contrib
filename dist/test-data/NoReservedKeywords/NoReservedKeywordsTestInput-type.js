var WrapperType;
(function (WrapperType) {
    var type;
    (function (type_1) {
        var type = (function () {
            function type() {
            }
            return type;
        }());
    })(type || (type = {}));
})(WrapperType || (WrapperType = {}));
var SampleType1;
(function (SampleType1) {
    var type;
})(SampleType1 || (SampleType1 = {}));
var SampleType2;
(function (SampleType2) {
    function type() { }
})(SampleType2 || (SampleType2 = {}));
var SampleType3 = (function () {
    function SampleType3() {
    }
    return SampleType3;
}());
var SampleType4 = (function () {
    function SampleType4() {
    }
    Object.defineProperty(SampleType4.prototype, "type", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleType4;
}());
var SampleType5 = (function () {
    function SampleType5() {
        this.func = function (type) { };
    }
    SampleType5.prototype.type = function () { };
    SampleType5.prototype.method = function (type) { };
    return SampleType5;
}());
function methodType(type) { }
var type;
//# sourceMappingURL=NoReservedKeywordsTestInput-type.js.map