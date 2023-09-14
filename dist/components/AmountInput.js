"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundingType = void 0;
const React = require("react");
const Button_1 = require("./Button");
const ButtonGroup_1 = require("./ButtonGroup");
const Input_1 = require("./Input");
const Icon_1 = require("./Icon");
var RoundingType;
(function (RoundingType) {
    RoundingType[RoundingType["None"] = 0] = "None";
    RoundingType[RoundingType["Round"] = 1] = "Round";
    RoundingType[RoundingType["Floor"] = 2] = "Floor";
    RoundingType[RoundingType["Ceiling"] = 3] = "Ceiling";
})(RoundingType = exports.RoundingType || (exports.RoundingType = {}));
class AmountInput extends React.Component {
    constructor(props) {
        super(props);
        this.change = (event) => {
            let value = event.target.value;
            let { onChange, round, nonZero, nonNegative, minimum, maximum } = this.props;
            if (onChange) {
                try {
                    let cleanedValue = cleanValue(value, round, nonZero, nonNegative);
                    cleanedValue = fixValueBounds(value, minimum, maximum);
                    onChange(cleanedValue, event);
                    this.setState({
                        value: value
                    });
                }
                catch (e) {
                    this.setState({
                        value: value
                    });
                }
            }
        };
        this.increment = (event) => {
            event.stopPropagation();
            let { value, onChange, onIncrement, round, nonZero, nonNegative, minimum, maximum } = this.props;
            try {
                let cleanedValue = cleanValue(value, round, nonZero, nonNegative);
                cleanedValue = fixValueBounds(value + 1, minimum, maximum);
                let processChange;
                if (onIncrement) {
                    processChange = onIncrement(cleanedValue, event);
                }
                if (onChange && processChange !== false) {
                    onChange(cleanedValue, event);
                }
                this.setState({
                    value: cleanedValue
                });
            }
            catch (e) {
            }
        };
        this.decrement = (event) => {
            event.stopPropagation();
            let { value, onChange, onDecrement, round, nonZero, nonNegative, minimum, maximum } = this.props;
            try {
                let cleanedValue = cleanValue(value, round, nonZero, nonNegative);
                cleanedValue = fixValueBounds(value - 1, minimum, maximum);
                let processChange;
                if (onDecrement) {
                    processChange = onDecrement(cleanedValue, event);
                }
                if (onChange && processChange !== false) {
                    onChange(cleanedValue, event);
                }
                this.setState({
                    value: cleanedValue
                });
            }
            catch (e) {
            }
        };
        this.reset = (event) => {
            let value = this.props.defaultValue;
            let { onChange, round, nonZero, nonNegative, minimum, maximum } = this.props;
            let cleanedValue;
            try {
                cleanedValue = cleanValue(value, round, nonZero, nonNegative);
                cleanedValue = fixValueBounds(value, minimum, maximum);
                if (onChange) {
                    onChange(cleanedValue, event);
                }
                this.setState({
                    value: cleanedValue
                });
            }
            catch (e) {
            }
        };
        let { value, defaultValue, round, nonZero, nonNegative, minimum, maximum } = props;
        let cleanedValue;
        try {
            cleanedValue = cleanValue(value, round, nonZero, nonNegative);
            cleanedValue = fixValueBounds(value, minimum, maximum);
        }
        catch (e) {
            cleanedValue = defaultValue;
        }
        this.state = {
            value: cleanedValue
        };
    }
    componentWillReceiveProps(props) {
        let { value, defaultValue, round, nonZero, nonNegative, minimum, maximum } = props;
        let cleanedValue;
        try {
            cleanedValue = cleanValue(value, round, nonZero, nonNegative);
            cleanedValue = fixValueBounds(value, minimum, maximum);
        }
        catch (e) {
            cleanedValue = defaultValue;
        }
        this.setState({
            value: cleanedValue
        });
    }
    render() {
        let { id, className, value, minimum, maximum, incrementText, decrementText, incrementIcon, decrementIcon, showReset, hideIncrementIcon, hideDecrementIcon, disabled, right, disableDecrement: _disableDecrement, disableIncrement: _disableIncrement, disableInput, fill } = this.props;
        let disableDecrement = _disableDecrement || disabled || value <= minimum;
        let disableIncrement = _disableIncrement || disabled || value >= maximum;
        let decrementIconFull = hideDecrementIcon ? undefined : ["-"];
        let incrementIconFull = hideIncrementIcon ? undefined : ["+"];
        if (right) {
            let classNames = className ? [className] : [];
            classNames.push('pull-right');
            className = classNames.join(' ');
        }
        return (React.createElement(ButtonGroup_1.default, { id: id, className: className, fill: fill },
            React.createElement(Button_1.default, { onClick: this.decrement, disabled: disableDecrement, style: { whiteSpace: 'nowrap' } },
                decrementIconFull,
                decrementText),
            React.createElement(Input_1.default, { value: this.state.value, onChange: this.change, disabled: disableInput || disabled, fill: fill }),
            React.createElement(Button_1.default, { theme: "primary", onClick: this.increment, disabled: disableIncrement, style: { whiteSpace: 'nowrap' } },
                incrementIconFull,
                incrementText),
            showReset ? React.createElement(Button_1.default, null,
                React.createElement(Icon_1.default, { name: "times" }),
                " ") : null));
    }
}
exports.default = AmountInput;
function cleanValue(value, round = 0, nonZero = false, nonNegative = false) {
    let cleanedValue = parseFloat(value);
    if (isNaN(cleanedValue)) {
        throw 'Value is not a number';
    }
    if (!isFinite(cleanedValue)) {
        throw 'Value is not finite';
    }
    if (nonZero && (cleanedValue === 0)) {
        throw 'Value is zero';
    }
    if (nonNegative && (cleanedValue < 0)) {
        throw 'Value is negative';
    }
    switch (round) {
        case RoundingType.Round:
            cleanedValue = Math.round(cleanedValue);
            break;
        case RoundingType.Floor:
            cleanedValue = Math.floor(cleanedValue);
            break;
        case RoundingType.Ceiling:
            cleanedValue = Math.ceil(cleanedValue);
            break;
    }
    return cleanedValue;
}
function fixValueBounds(value, minimum, maximum) {
    if (typeof minimum === 'number' && value < minimum) {
        value = minimum;
    }
    if (typeof maximum === 'number' && value > maximum) {
        value = maximum;
    }
    return value;
}
//# sourceMappingURL=AmountInput.js.map