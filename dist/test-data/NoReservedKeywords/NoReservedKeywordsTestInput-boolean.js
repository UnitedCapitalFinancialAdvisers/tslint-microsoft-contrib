var SampleBoolean1;
(function (SampleBoolean1) {
    var boolean;
})(SampleBoolean1 || (SampleBoolean1 = {}));
var SampleBoolean2;
(function (SampleBoolean2) {
    function boolean() { }
})(SampleBoolean2 || (SampleBoolean2 = {}));
var SampleBoolean3 = (function () {
    function SampleBoolean3() {
    }
    return SampleBoolean3;
}());
var SampleBoolean4 = (function () {
    function SampleBoolean4() {
    }
    Object.defineProperty(SampleBoolean4.prototype, "boolean", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleBoolean4;
}());
var SampleBoolean5 = (function () {
    function SampleBoolean5() {
        this.func = function (boolean) { };
    }
    SampleBoolean5.prototype.boolean = function () { };
    SampleBoolean5.prototype.method = function (boolean) { };
    return SampleBoolean5;
}());
function methodBoolean(boolean) { }
var boolean;
//# sourceMappingURL=NoReservedKeywordsTestInput-boolean.js.map