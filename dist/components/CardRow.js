"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Align_1 = require("../util/Align");
const ClassNames_1 = require("../util/ClassNames");
class CardRow extends React.Component {
    render() {
        let { id, className, align } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('card-row');
        if (align) {
            Align_1.alignClass(align, classNames);
        }
        return (React.createElement("div", { className: classNames.toString(), id: id }, this.props.children));
    }
}
exports.default = CardRow;
//# sourceMappingURL=CardRow.js.map