"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ClassNames_1 = require("../util/ClassNames");
class CardSection extends React.Component {
    render() {
        let { id, className, multiColumn, centered } = this.props;
        let classNames = new ClassNames_1.default(className, 'card-section');
        classNames.addTest('card-section-multi-column', multiColumn);
        classNames.addTest('card-section-centered', centered);
        return (React.createElement("section", { className: classNames.toString(), id: id }, this.props.children));
    }
}
exports.default = CardSection;
//# sourceMappingURL=CardSection.js.map