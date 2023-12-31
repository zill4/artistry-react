"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Popover extends React.Component {
    preventClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('popover');
        switch (this.props.direction) {
            case 'top':
                classNames.push('popover-top');
                break;
            case 'right':
                classNames.push('popover-right');
                break;
            case 'bottom':
                classNames.push('popover-bottom');
                break;
            case 'left':
                classNames.push('popover-left');
                break;
            default:
                classNames.push('popover-top');
                break;
        }
        switch (this.props.align) {
            case 'top':
                classNames.push('popover-align-top');
                break;
            case 'right':
                classNames.push('popover-align-right');
                break;
            case 'bottom':
                classNames.push('popover-align-bottom');
                break;
            case 'left':
                classNames.push('popover-align-left');
                break;
            default:
                classNames.push('popover-align-center');
                break;
        }
        if (this.props.fill) {
            classNames.push('popover-fill');
        }
        if (this.props.open) {
            classNames.push('popover-open');
        }
        if (this.props.open === false) {
            classNames.push('popover-closed');
        }
        if (this.props.closed) {
            classNames.push('popover-closed');
        }
        if (this.props.space) {
            classNames.push('popover-space');
        }
        return (React.createElement("div", { className: classNames.join(' '), id: this.props.id, onClick: this.props.preventClick ? this.preventClick : undefined },
            React.createElement("div", { className: "popover-content" }, this.props.children)));
    }
}
exports.default = Popover;
//# sourceMappingURL=Popover.js.map