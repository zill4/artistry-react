"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class CardTitle extends React.Component {
    render() {
        let { id, className } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('card-title');
        return (React.createElement("header", { className: classNames.join(' '), id: id }, this.props.children));
    }
}
exports.default = CardTitle;
//# sourceMappingURL=CardTitle.js.map