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
const Mask_1 = require("../util/Mask");
class MaskedInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.inputRef = React.createRef();
        this.command = false;
        this.onFocus = (event) => {
            event.preventDefault();
            this.updateElement(this.mask.updateSelection(event.target.value, this.getSelection()));
        };
        this.onBlur = () => {
            this.command = false;
        };
        this.onClick = (event) => {
            event.preventDefault();
            this.updateElement(this.mask.updateSelection(event.target.value, this.getSelection()));
        };
        this.onSelect = (event) => {
            event.preventDefault();
            this.updateElement(this.mask.updateSelection(event.target.value, this.getSelection()));
        };
        this.onChange = (event) => {
            event.preventDefault();
            try {
                this.updateElement(this.mask.updateValue(event.target.value, this.value));
                if (this.props.onChange) {
                    this.props.onChange(event);
                }
            }
            catch (e) {
                this.rollback();
            }
        };
        this.onKeyDown = (event) => {
            switch (event.keyCode) {
                case 8:
                    event.preventDefault();
                    try {
                        this.updateElement(this.mask.deleteCharacter(event.target.value, this.getSelection(), false));
                    }
                    catch (e) {
                        this.rollback();
                    }
                    break;
                case 35:
                    event.preventDefault();
                    this.updateElement(this.mask.updateSelection(event.target.value, this.getSelection(), Mask_1.KeyboardMovement.end));
                    break;
                case 36:
                    event.preventDefault();
                    this.updateElement(this.mask.updateSelection(event.target.value, this.getSelection(), Mask_1.KeyboardMovement.home));
                    break;
                case 37:
                    event.preventDefault();
                    this.updateElement(this.mask.updateSelection(event.target.value, this.getSelection(), this.command ? Mask_1.KeyboardMovement.home : Mask_1.KeyboardMovement.left));
                    break;
                case 39:
                    event.preventDefault();
                    this.updateElement(this.mask.updateSelection(event.target.value, this.getSelection(), this.command ? Mask_1.KeyboardMovement.end : Mask_1.KeyboardMovement.right));
                    break;
                case 46:
                    event.preventDefault();
                    try {
                        this.updateElement(this.mask.deleteCharacter(event.target.value, this.getSelection(), true));
                    }
                    catch (e) {
                        this.rollback();
                    }
                    break;
                case 91:
                case 93:
                case 224:
                    this.command = true;
                    break;
            }
        };
        this.onKeyUp = (event) => {
            switch (event.keyCode) {
                case 91:
                case 93:
                case 224:
                    this.command = false;
                    break;
            }
        };
        let { value } = this.props;
        this.mask = new Mask_1.default(this.props.mask);
        this.value = this.mask.formatValue(value, true);
        this.selectionStart = 0;
        this.selectionEnd = 0;
    }
    componentDidMount() {
        this.updateElement({
            value: this.value
        });
    }
    updateElement(maskUpdate) {
        let input = this.inputRef.current;
        if (typeof maskUpdate.value !== 'undefined') {
            input.value = maskUpdate.value;
            this.value = maskUpdate.value;
        }
        if (typeof maskUpdate.selectionEnd !== 'undefined' && typeof maskUpdate.selectionEnd !== 'undefined') {
            input.setSelectionRange(maskUpdate.selectionStart, maskUpdate.selectionEnd, 'none');
            this.selectionStart = maskUpdate.selectionStart;
            this.selectionEnd = maskUpdate.selectionEnd;
        }
    }
    componentWillReceiveProps(nextProps) {
        let { value } = nextProps;
        if (this.props.value !== value) {
            try {
                this.updateElement(this.mask.updateValue(value, this.value));
            }
            catch (e) {
                this.rollback();
            }
        }
    }
    getSelection() {
        let input = this.inputRef.current;
        return {
            start: input.selectionStart,
            end: input.selectionEnd,
            direction: input.selectionDirection
        };
    }
    rollback() {
        this.updateElement({
            value: this.value,
            selectionStart: this.selectionStart,
            selectionEnd: this.selectionEnd
        });
    }
    render() {
        let _a = this.props, { id, className, value, fill, onChange } = _a, props = __rest(_a, ["id", "className", "value", "fill", "onChange"]);
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('input');
        if (fill) {
            classNames.push('fill-width');
        }
        return (React.createElement("input", Object.assign({ ref: this.inputRef, id: id, className: classNames.join(' '), onFocus: this.onFocus, onClick: this.onClick, onSelect: this.onSelect, onChange: this.onChange, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp }, props)));
    }
}
exports.default = MaskedInput;
//# sourceMappingURL=MaskedInput.js.map