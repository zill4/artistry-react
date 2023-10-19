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
class Input extends React.Component {
    render() {
        let _a = this.props, { id, className, fill, mask, displaySize } = _a, props = __rest(_a, ["id", "className", "fill", "mask", "displaySize"]);
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('input');
        if (fill) {
            classNames.push('fill-width');
        }
        let _displaySize;
        switch (displaySize) {
            case 'small':
                _displaySize = 'input-small';
                break;
            case 'large':
                _displaySize = 'input-large';
                break;
        }
        if (mask) {
            return (React.createElement(MaskedInput_1.default, Object.assign({ id: id, className: classNames.join(' '), "data-size": _displaySize, mask: mask }, props)));
        }
        else {
            return (React.createElement("input", Object.assign({ id: id, className: classNames.join(' '), "data-size": _displaySize }, props)));
        }
    }
}
exports.default = Input;
//# sourceMappingURL=Input.js.map