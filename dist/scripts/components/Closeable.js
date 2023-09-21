"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PromiseUtil_1 = require("../util/PromiseUtil");
class Closeable extends React.Component {
    constructor() {
        super(...arguments);
        this.root = React.createRef();
        this.state = {
            closed: this.props.closed,
            running: false,
            animating: false,
            height: undefined
        };
        this.runCount = 0;
        this.transitionEnd = async (event) => {
            if (event.propertyName === 'height') {
                let animating = this.state.animating;
                if (!animating) {
                    if (this.state.closed) {
                        await (0, PromiseUtil_1.setState)({
                            running: false
                        }, this);
                    }
                    else {
                        await (0, PromiseUtil_1.setState)({
                            height: undefined,
                            running: false
                        }, this);
                    }
                }
            }
        };
    }
    async componentWillReceiveProps(nextProps) {
        if (this.props.closed !== nextProps.closed) {
            let node = this.root.current;
            this.runCount++;
            let runCount = this.runCount;
            await (0, PromiseUtil_1.setState)({
                running: true,
                animating: true,
            }, this);
            if (runCount !== this.runCount) {
                return;
            }
            if (nextProps.closed) {
                await (0, PromiseUtil_1.setState)({
                    height: node.offsetHeight + 'px'
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                await (0, PromiseUtil_1.setState)({
                    closed: true
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                let border = node.offsetHeight - node.clientHeight;
                await (0, PromiseUtil_1.setState)({
                    height: border / 2 + 'px'
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                await (0, PromiseUtil_1.setState)({
                    animating: false
                }, this);
            }
            else {
                let border = node.offsetHeight - node.clientHeight;
                await (0, PromiseUtil_1.setState)({
                    height: border / 2 + 'px'
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                await (0, PromiseUtil_1.setState)({
                    closed: false
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                await (0, PromiseUtil_1.setState)({
                    height: border / 2 + node.scrollHeight + 'px'
                }, this);
                if (runCount !== this.runCount) {
                    return;
                }
                await (0, PromiseUtil_1.setState)({
                    animating: false
                }, this);
            }
        }
    }
    componentWillUnmount() {
        this.runCount++;
    }
    render() {
        let { id, className, closed } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('closeable');
        return (React.createElement("div", { className: classNames.join(' '), id: id, "data-closed": this.state.closed, "data-running": this.state.running, style: { height: this.state.height }, onTransitionEnd: this.transitionEnd, ref: this.root }, this.props.children));
    }
}
exports.default = Closeable;
//# sourceMappingURL=Closeable.js.map