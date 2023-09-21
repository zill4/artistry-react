"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ClassNames_1 = require("../util/ClassNames");
class FormRow extends React.Component {
    render() {
        let { id, className, screenSize } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('form-text');
        switch (screenSize) {
            case 'small':
                classNames.add('form-text-sm');
                break;
            case 'medium':
                classNames.add('form-text-md');
                break;
            case 'large':
                classNames.add('form-text-lg');
                break;
            case 'x-large':
                classNames.add('form-text-xl');
                break;
            case 'stacked':
                classNames.add('form-text-stacked');
                break;
        }
        return (React.createElement("div", { className: classNames.toString(), id: id }, this.props.children));
    }
}
exports.default = FormRow;
//# sourceMappingURL=FormRow.js.map