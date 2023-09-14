"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Divider extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('divider');
        return React.createElement("div", { className: classNames.join(' '), id: this.props.id }, this.props.children);
    }
}
exports.default = Divider;
//# sourceMappingURL=Divider.js.map