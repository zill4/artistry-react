"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PromiseUtil_1 = require("../util/PromiseUtil");
const BodyScroll_1 = require("../util/BodyScroll");
class Fillable extends React.Component {
    constructor(props) {
        super(props);
        this.root = React.createRef();
        this.state = {
            filled: this.props.filled
        };
        this.runCount = 0;
        if (props.filled) {
            BodyScroll_1.default.lock(true);
        }
    }
    async componentWillReceiveProps(nextProps) {
        if (this.props.filled !== nextProps.filled) {
            let node = this.root.current;
            this.runCount++;
            let runCount = this.runCount;
            if (!nextProps.filled) {
                let rect = node.getBoundingClientRect();
                await PromiseUtil_1.setState({
                    top: rect.top + 'px',
                    bottom: window.innerHeight - rect.top - rect.height + 'px',
                    left: rect.left + 'px',
                    right: document.body.scrollWidth - rect.left - rect.width + 'px'
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                await PromiseUtil_1.waitAnimation(220);
                if (runCount !== this.runCount) {
                    return;
                }
                await PromiseUtil_1.setState({
                    height: undefined,
                    width: undefined,
                    top: undefined,
                    right: undefined,
                    bottom: undefined,
                    left: undefined,
                    filled: false
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                BodyScroll_1.default.unlock();
            }
            else {
                let rect = node.getBoundingClientRect();
                await PromiseUtil_1.setState({
                    height: rect.height + 'px',
                    width: rect.width + 'px',
                    top: rect.top + 'px',
                    bottom: window.innerHeight - rect.top - rect.height + 'px',
                    left: rect.left + 'px',
                    right: document.body.scrollWidth - rect.left - rect.width + 'px',
                    filled: true
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                await PromiseUtil_1.waitAnimation(220);
                if (runCount !== this.runCount) {
                    return;
                }
                await PromiseUtil_1.setState({
                    top: 0 + 'px',
                    right: 0 + 'px',
                    bottom: 0 + 'px',
                    left: 0 + 'px'
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                BodyScroll_1.default.lock(true);
            }
        }
    }
    componentWillUnmount() {
        if (this.state.filled) {
            BodyScroll_1.default.unlock();
        }
        this.runCount++;
    }
    render() {
        let { id, className, card } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('fillable');
        if (card) {
            classNames.push('card-fillable');
        }
        return (React.createElement("div", { className: classNames.join(' '), id: id, "data-filled": this.state.filled, style: {
                height: this.state.height,
                width: this.state.width
            }, ref: this.root },
            React.createElement("div", { className: "fillable-content", style: {
                    top: this.state.top,
                    right: this.state.right,
                    bottom: this.state.bottom,
                    left: this.state.left,
                } }, this.props.children)));
    }
}
exports.default = Fillable;
//# sourceMappingURL=Fillable.js.map