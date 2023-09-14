"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const MaskedInput_1 = require("./MaskedInput");
class TimeInput extends React.Component {
    render() {
        let _a = this.props, { seconds, value } = _a, props = __rest(_a, ["seconds", "value"]);
        let date = new Date(value);
        let timeString = date.toTimeString();
        let mask;
        if (seconds) {
            timeString = timeString.substr(0, 8);
            mask = '[[0-23]]:[[0-59]]:[[0-59]]';
        }
        else {
            timeString = timeString.substr(0, 5);
            mask = '[[0-23]]:[[0-59]]';
        }
        return (React.createElement(MaskedInput_1.default, Object.assign({}, props, { mask: mask, value: timeString })));
    }
}
exports.default = TimeInput;
//# sourceMappingURL=TimeInput.js.map