"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ActionBar extends React.Component {
    render() {
        let { id, className, direction, align, displaySize } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('action-bar');
        return (React.createElement("div", { className: classNames.join(' '), id: id, "data-direction": direction, "data-align": align, "data-size": displaySize }, this.props.children));
    }
}
exports.default = ActionBar;
//# sourceMappingURL=ActionBar.js.map