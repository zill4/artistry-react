"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ClassNames_1 = require("../util/ClassNames");
class Spacer extends React.Component {
    render() {
        let { className, id, list } = this.props;
        let classNames = new ClassNames_1.default(className, 'spacer');
        if (list) {
            return (React.createElement("li", { className: classNames.toString(), id: id }));
        }
        else {
            return (React.createElement("div", { className: classNames.toString(), id: id }));
        }
    }
}
exports.default = Spacer;
//# sourceMappingURL=Spacer.js.map