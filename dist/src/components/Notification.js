"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PromiseUtil_1 = require("../util/PromiseUtil");
const ClassNames_1 = require("../util/ClassNames");
class Notification extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.decayCounter = 0;
        this.state = {
            hide: false
        };
        this.startDecay = async () => {
            if (this.props.decay) {
                this.decayCounter++;
                let decayCounter = this.decayCounter;
                await PromiseUtil_1.wait(this.props.decay);
                if (decayCounter === this.decayCounter) {
                    if (!this.state.hide) {
                        this.setState({
                            hide: true
                        });
                    }
                }
            }
        };
        this.endDecay = async (event) => {
            if (event.animationName.endsWith('out') && this.props.onClose) {
                this.props.onClose();
            }
        };
        this.stopDecay = () => {
            if (this.props.allowDelay) {
                this.decayCounter++;
            }
        };
        this.startDecay();
    }
    render() {
        let { id, className, type, title, clickable, allowDelay } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('notification', 'animatable');
        let theme;
        switch (type) {
            case 'success':
                theme = 'success';
                break;
            case 'info':
                theme = 'info';
                break;
            case 'warning':
                theme = 'warning';
                break;
            case 'danger':
                theme = 'danger';
                break;
        }
        if (clickable || allowDelay) {
            classNames.add('clickable');
        }
        let direction = 'in';
        if (this.state.hide) {
            direction = 'out';
        }
        return (React.createElement("aside", { className: classNames.toString(), "data-animation": this.props.animation || "fade-right", "data-direction": direction, "data-theme": theme, id: id, onClick: this.props.onClick, onMouseEnter: this.stopDecay, onMouseLeave: this.startDecay, onAnimationEnd: this.endDecay, role: clickable ? "button" : undefined },
            title ?
                React.createElement("header", null, title) :
                undefined,
            React.createElement("div", { className: "notification-content" }, this.props.children)));
    }
}
exports.default = Notification;
//# sourceMappingURL=Notification.js.map