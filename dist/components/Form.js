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
class Form extends React.Component {
    onKeyDown(event) {
        switch (event.keyCode) {
            case 13:
                this.props.onEnter(event);
                break;
            case 27:
                this.props.onEscape(event);
                break;
        }
    }
    render() {
        let _a = this.props, { id, className, screenSize, lockable, locked, nonForm, onEnter, onEscape } = _a, props = __rest(_a, ["id", "className", "screenSize", "lockable", "locked", "nonForm", "onEnter", "onEscape"]);
        let classNames = className ? [className] : [];
        classNames.push('form');
        if (locked) {
            classNames.push('form-lock');
        }
        switch (screenSize) {
            case 'small':
                classNames.push('form-sm');
                break;
            case 'medium':
                classNames.push('form-md');
                break;
            case 'large':
                classNames.push('form-lg');
                break;
            case 'x-large':
                classNames.push('form-xl');
                break;
            case 'stacked':
                classNames.push('form-stacked');
                break;
        }
        let onKeyDown = (onEnter || onEscape) ? this.onKeyDown.bind(this) : undefined;
        if (nonForm) {
            return (React.createElement("div", Object.assign({ id: id, className: classNames.join(' '), onKeyDown: onKeyDown }, props),
                lockable ?
                    React.createElement("div", { className: "form-lock-screen" }) :
                    null,
                this.props.children));
        }
        else {
            return (React.createElement("form", Object.assign({ id: id, className: classNames.join(' '), onKeyDown: onKeyDown }, props),
                lockable ?
                    React.createElement("div", { className: "form-lock-screen" }) :
                    null,
                this.props.children));
        }
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map