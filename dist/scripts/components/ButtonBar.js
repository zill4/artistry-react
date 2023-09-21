"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ButtonBar extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('button-bar');
        let className = classNames.join(' ');
        return React.createElement("div", { className: className, id: this.props.id }, this.props.children);
    }
}
exports.default = ButtonBar;
//# sourceMappingURL=ButtonBar.js.map