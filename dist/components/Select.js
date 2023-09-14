"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Select extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            let { data, onChange, valueProp } = this.props;
            if (onChange) {
                let value = event.target.value;
                if (valueProp) {
                    let option = data.find(option => option[valueProp] == value);
                    onChange(option, event);
                }
                else {
                    let option = data.find(option => option == value);
                    onChange(option, event);
                }
            }
        };
    }
    render() {
        let { id, className, data, template, value, valueProp, allowEmpty, emptyValue } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('input');
        let emptyOption = undefined;
        if (allowEmpty) {
            let emptyString = undefined;
            switch (typeof emptyValue) {
                case 'object':
                    if (emptyValue) {
                        let prop = emptyValue[valueProp];
                        if (prop) {
                            emptyString = prop.toString();
                        }
                    }
                    break;
                case 'string':
                    emptyString = emptyValue;
                    break;
                case 'number':
                    emptyString = emptyValue.toString();
                    break;
            }
            emptyOption = (React.createElement("option", { key: "_empty_option", value: emptyString }));
        }
        return (React.createElement("select", { id: id, className: classNames.join(' '), value: value ? value.toString() : undefined, onChange: this.onChange },
            emptyOption,
            template ?
                data.map(template) :
                data.map(option => {
                    if (valueProp) {
                        let optionValue = option[valueProp];
                        return (React.createElement("option", { key: optionValue, value: optionValue }, optionValue));
                    }
                    else {
                        return (React.createElement("option", { key: option, value: option }, option));
                    }
                })));
    }
}
exports.default = Select;
//# sourceMappingURL=Select.js.map