"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ClassNames_1 = require("../util/ClassNames");
class CardControl extends React.Component {
    render() {
        let { id, className, title, label, width, stacked } = this.props;
        let classNames = new ClassNames_1.default(className, 'card-control');
        classNames.addTest('card-control-stacked', stacked);
        if (width && typeof width === 'number') {
            width += 'px';
        }
        let content = (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "card-control-title" }, title),
            React.createElement("div", { className: "card-control-data" }, this.props.children)));
        if (label) {
            return (React.createElement("label", { className: classNames.toString(), id: id, style: { '--card-control-min-width': width } }, content));
        }
        else {
            return (React.createElement("div", { className: classNames.toString(), id: id, style: { '--card-control-min-width': width } }, content));
        }
    }
}
exports.default = CardControl;
//# sourceMappingURL=CardControl.js.map