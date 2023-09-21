"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ClassNames_1 = require("../util/ClassNames");
const FormText_1 = require("./FormText");
class FormGroup extends React.Component {
    render() {
        let classNames = new ClassNames_1.default(this.props.className);
        classNames.add('form-group');
        if (this.props.inline) {
            classNames.add('form-group-inline');
        }
        if (this.props.stacked) {
            classNames.add('form-group-stacked');
        }
        let input = (React.createElement("div", { className: "form-input" }, this.props.children));
        let label;
        if (this.props.label) {
            if (this.props.nonLabel) {
                label = (React.createElement("div", { className: "form-title" }, this.props.label));
            }
            else {
                label = (React.createElement("label", { className: "form-title" }, this.props.label));
            }
        }
        return (React.createElement("div", { className: classNames.toString(), id: this.props.id },
            label,
            input,
            this.props.text ?
                React.createElement(FormText_1.default, { theme: this.props.theme, align: this.props.textAlign }, this.props.text) :
                null));
    }
}
exports.default = FormGroup;
//# sourceMappingURL=FormGroup.js.map