"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class CardNavigation extends React.Component {
    render() {
        let { id, className, align } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('card-nav');
        if (align === 'end') {
            classNames.push('card-nav-align-end');
        }
        return (React.createElement("nav", { className: classNames.join(' '), id: id }, this.props.children));
    }
}
exports.default = CardNavigation;
//# sourceMappingURL=CardNavigation.js.map