var WrapperSet;
(function (WrapperSet) {
    var set;
    (function (set_1) {
        var set = (function () {
            function set() {
            }
            return set;
        }());
    })(set || (set = {}));
})(WrapperSet || (WrapperSet = {}));
var SampleSet1;
(function (SampleSet1) {
    var set;
})(SampleSet1 || (SampleSet1 = {}));
var SampleSet2;
(function (SampleSet2) {
    function set() { }
})(SampleSet2 || (SampleSet2 = {}));
var SampleSet3 = (function () {
    function SampleSet3() {
    }
    return SampleSet3;
}());
var SampleSet4 = (function () {
    function SampleSet4() {
    }
    Object.defineProperty(SampleSet4.prototype, "set", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleSet4;
}());
var SampleSet5 = (function () {
    function SampleSet5() {
        this.func = function (set) { };
    }
    SampleSet5.prototype.set = function () { };
    SampleSet5.prototype.method = function (set) { };
    return SampleSet5;
}());
function methodSet(set) { }
var set;
//# sourceMappingURL=NoReservedKeywordsTestInput-set.js.map