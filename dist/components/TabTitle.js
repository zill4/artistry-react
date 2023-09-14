"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TabTitle extends React.Component {
    constructor() {
        super(...arguments);
        this.selectPanel = (event) => {
            if (this.props.onSelectPanel) {
                return this.props.onSelectPanel(event);
            }
        };
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('tab-title');
        if (this.props.active) {
            classNames.push('tab-active');
        }
        return (React.createElement("li", { className: classNames.join(' '), id: this.props.id },
            React.createElement("a", { onClick: this.selectPanel }, this.props.title)));
    }
}
exports.default = TabTitle;
//# sourceMappingURL=TabTitle.js.map