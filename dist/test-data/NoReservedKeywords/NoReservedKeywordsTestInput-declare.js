var WrapperDeclare;
(function (WrapperDeclare) {
    var declare;
    (function (declare_1) {
        var declare = (function () {
            function declare() {
            }
            return declare;
        }());
    })(declare || (declare = {}));
})(WrapperDeclare || (WrapperDeclare = {}));
var SampleDeclare1;
(function (SampleDeclare1) {
    var declare;
})(SampleDeclare1 || (SampleDeclare1 = {}));
var SampleDeclare2;
(function (SampleDeclare2) {
    function declare() { }
})(SampleDeclare2 || (SampleDeclare2 = {}));
var SampleDeclare3 = (function () {
    function SampleDeclare3() {
    }
    return SampleDeclare3;
}());
var SampleDeclare4 = (function () {
    function SampleDeclare4() {
    }
    Object.defineProperty(SampleDeclare4.prototype, "declare", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleDeclare4;
}());
var SampleDeclare5 = (function () {
    function SampleDeclare5() {
        this.func = function (declare) { };
    }
    SampleDeclare5.prototype.declare = function () { };
    SampleDeclare5.prototype.method = function (declare) { };
    return SampleDeclare5;
}());
function methodDeclare(declare) { }
var declare;
//# sourceMappingURL=NoReservedKeywordsTestInput-declare.js.map