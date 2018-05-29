var SampleProtected1;
(function (SampleProtected1) {
    var protected;
})(SampleProtected1 || (SampleProtected1 = {}));
var SampleProtected2;
(function (SampleProtected2) {
    function protected() { }
})(SampleProtected2 || (SampleProtected2 = {}));
var SampleProtected3 = (function () {
    function SampleProtected3() {
    }
    return SampleProtected3;
}());
var SampleProtected4 = (function () {
    function SampleProtected4() {
    }
    Object.defineProperty(SampleProtected4.prototype, "protected", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleProtected4;
}());
var SampleProtected5 = (function () {
    function SampleProtected5() {
    }
    SampleProtected5.prototype.protected = function () { };
    return SampleProtected5;
}());
function methodProtected(protected) { }
var protected;
//# sourceMappingURL=NoReservedKeywordsTestInput-protected.js.map