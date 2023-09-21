"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class MenuBarLink extends React.Component {
    constructor() {
        super(...arguments);
        this.onClick = (event) => {
            if (this.props.onClick) {
                this.props.onClick(event);
            }
        };
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('menu-link');
        if (this.props.active) {
            classNames.push('menu-active');
        }
        return (React.createElement("li", { className: classNames.join(' '), id: this.props.id }, !this.props.noLink ?
            React.createElement("a", { href: this.props.href || '', onClick: this.onClick }, this.props.title) :
            React.createElement("span", { onClick: this.onClick }, this.props.title)));
    }
}
exports.default = MenuBarLink;
//# sourceMappingURL=MenuBarLink.js.map