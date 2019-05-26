"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRecFun = function (parent) {
    return {
        result: parent,
        deeper: function (child) {
            return exports.testRecFun(__assign({}, parent, child));
        }
    };
};
var p1 = exports.testRecFun({ one: '1' });
console.log(p1.result.one);
var p2 = p1.deeper({ two: '2' });
console.log(p2.result.one, p2.result.two);
var p3 = p2.deeper({ three: '3' });
console.log(p3.result.one, p3.result.two, p3.result.three);
//# sourceMappingURL=index.js.map