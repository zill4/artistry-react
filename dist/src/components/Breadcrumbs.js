"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Breadcrumbs extends React.Component {
    render() {
        let { id, className } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('breadcrumbs');
        return (React.createElement("div", { className: classNames.join(' '), id: id }, this.props.children));
    }
}
exports.default = Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map