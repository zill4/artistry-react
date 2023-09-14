"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Toggle extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('toggle');
        return (React.createElement("div", { className: classNames.join(' ') },
            React.createElement("label", null,
                React.createElement("div", { className: "toggle-box" },
                    React.createElement("input", Object.assign({ type: "checkbox" }, this.props)),
                    React.createElement("div", { className: "toggle-button" }, " ")))));
    }
}
exports.default = Toggle;
//# sourceMappingURL=Toggle.js.map