"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ButtonGroups extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('button-group');
        if (this.props.fill) {
            classNames.push('fill-width');
        }
        return React.createElement("div", { className: classNames.join(' '), id: this.props.id }, this.props.children);
    }
}
exports.default = ButtonGroups;
//# sourceMappingURL=ButtonGroup.js.map