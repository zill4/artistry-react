"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DepthStack_1 = require("../util/DepthStack");
const Button_1 = require("./Button");
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onKeyDown = (event) => {
            let { value, options } = this.state;
            let activeOption;
            switch (event.keyCode) {
                case 13:
                    this.onSearch(event);
                    break;
                case 27:
                    this.onClose(event);
                    break;
                case 38:
                    event.preventDefault();
                    if (!value || !value.trim()) {
                        activeOption = -1;
                    }
                    else {
                        activeOption = this.state.activeOption;
                        activeOption--;
                        if (activeOption < -1) {
                            activeOption = -1;
                        }
                    }
                    if (activeOption !== -1) {
                        this.setState({
                            activeOption: activeOption,
                            value: options[activeOption]
                        });
                    }
                    else {
                        this.setState({
                            activeOption: activeOption
                        });
                    }
                    break;
                case 40:
                    event.preventDefault();
                    if (!value || !value.trim()) {
                        activeOption = -1;
                    }
                    else {
                        activeOption = this.state.activeOption;
                        activeOption++;
                        if (activeOption >= options.length) {
                            activeOption = options.length - 1;
                        }
                    }
                    if (activeOption !== -1) {
                        this.setState({
                            activeOption: activeOption,
                            value: options[activeOption]
                        });
                    }
                    else {
                        this.setState({
                            activeOption: activeOption
                        });
                    }
                    break;
            }
        };
        this.onChange = (event) => {
            if (this.props.onChange) {
                this.props.onChange(event);
            }
        };
        this.onSearch = (event) => {
            if (this.props.onSearch) {
                this.props.onSearch(event, this.state.value);
            }
        };
        this.onClear = (event) => {
            if (this.props.onClear) {
                this.props.onClear(event);
            }
        };
        this.onClose = (event) => {
            if (this.props.onClose) {
                this.props.onClose(event);
            }
        };
        let { value, options } = this.props;
        options = this.cleanOptions(options, value);
        this.state = {
            activeOption: -1,
            value: value,
            options: options
        };
    }
    cleanOptions(options, value) {
        if (value && value.trim) {
            options = options ? options.slice(0) : [];
            options.unshift(value);
        }
        else {
            options = options || [];
        }
        return options;
    }
    onSelectOption(option, index, event) {
        this.setState({
            activeOption: index,
            value: option
        });
        if (this.props.onSelectOption) {
            this.props.onSelectOption(event, option);
        }
    }
    componentWillMount() {
        if (!this.closeHandle) {
            this.closeHandle = this.onClose.bind(this);
        }
        if (this.props.showOptions) {
            DepthStack_1.default.push(this.closeHandle);
        }
    }
    componentWillReceiveProps(nextProps) {
        let { value, options, showOptions } = nextProps;
        options = this.cleanOptions(options, value);
        this.setState({
            value: value,
            options: options
        });
        if (showOptions !== this.props.showOptions) {
            if (showOptions) {
                DepthStack_1.default.push(this.closeHandle);
            }
            else {
                DepthStack_1.default.remove(this.closeHandle);
            }
        }
        if (value !== this.props.value) {
            this.setState({
                activeOption: -1
            });
        }
    }
    componentWillUnmount() {
        if (this.props.showOptions) {
            DepthStack_1.default.remove(this.closeHandle);
        }
    }
    render() {
        let _a = this.props, { id, className, buttonText, altAction, altActionText, showOptions, fill, disabled, disabledButton, disabledInput, screenSize, showClear, clearText, value: _value, options: _options, onChange, onSelectOption, onSearch, onClear, onClose } = _a, buttonProps = __rest(_a, ["id", "className", "buttonText", "altAction", "altActionText", "showOptions", "fill", "disabled", "disabledButton", "disabledInput", "screenSize", "showClear", "clearText", "value", "options", "onChange", "onSelectOption", "onSearch", "onClear", "onClose"]);
        let { value, options, activeOption } = this.state;
        let classNames = className ? [className] : [];
        classNames.push('search');
        let open = undefined;
        if (options.length && !disabled && !disabledInput && showOptions) {
            open = "true";
        }
        let inputClassNames = ['input', 'search-input'];
        if (fill) {
            inputClassNames.push('fill-width');
        }
        switch (screenSize) {
            case 'x-small':
                classNames.push('search-xs');
                break;
            case 'small':
                classNames.push('search-sm');
                break;
            case 'medium':
                classNames.push('search-md');
                break;
            case 'large':
                classNames.push('search-lg');
                break;
            case 'x-large':
                classNames.push('search-xl');
                break;
        }
        return (React.createElement("div", { id: id, className: classNames.join(' '), "data-open": open },
            React.createElement("div", { className: "button-group search-button-group" },
                React.createElement("input", { className: inputClassNames.join(' '), onKeyDown: this.onKeyDown, onChange: this.onChange, value: value || '', disabled: disabled || disabledInput }),
                showClear && onClear ?
                    React.createElement(Button_1.default, { className: "search-button", onClick: this.onClear, disabled: !value }, clearText || 'Clear') :
                    undefined,
                React.createElement(Button_1.default, Object.assign({ className: "search-button", onClick: this.onSearch, disabled: disabled || disabledButton }, buttonProps), buttonText || 'Search')),
            React.createElement("div", { className: "search-option-box" },
                React.createElement("ul", { role: "listbox", className: "search-option-list" }, !options ? undefined : options.map((option, index) => {
                    let optionClassName = ['search-option'];
                    if (index === activeOption) {
                        optionClassName.push('search-option-active');
                    }
                    return (React.createElement("li", { className: optionClassName.join(' '), role: "presentation", key: option + '_' + index },
                        React.createElement("div", { className: "search-option-action", role: "option", onClick: this.onSelectOption.bind(this, option, index) },
                            React.createElement("div", { className: "search-option-action-text" },
                                React.createElement("span", null,
                                    React.createElement("b", null, option)))),
                        altAction && altActionText ?
                            React.createElement("div", { className: "search-option-alt-action", onClick: altAction.bind(this, option) },
                                React.createElement("div", { className: "search-option-alt-action-text" }, altActionText)) :
                            undefined));
                })))));
    }
}
exports.default = Search;
//# sourceMappingURL=Search.js.map