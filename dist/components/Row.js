"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Row extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        if (!this.props.reverse) {
            classNames.push('row');
        }
        else {
            classNames.push('row-reverse');
        }
        let className = classNames.join(' ');
        return React.createElement("div", { className: className, id: this.props.id }, this.props.children);
    }
}
exports.default = Row;
//# sourceMappingURL=Row.js.map