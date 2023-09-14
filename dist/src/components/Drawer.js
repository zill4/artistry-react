"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Grid_1 = require("./Grid");
const BodyScroll_1 = require("../util/BodyScroll");
const PromiseUtil_1 = require("../util/PromiseUtil");
const Portal_1 = require("../util/Portal");
const DepthStack_1 = require("../util/DepthStack");
class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.runCount = 0;
        this.close = (event) => {
            if (this.props.onClose) {
                this.props.onClose(event);
            }
        };
        this.transitionEnd = async (event) => {
            if (event.propertyName === 'transform') {
                if (!this.props.open) {
                    await this.setState({
                        remove: true
                    });
                    this.updateModalRoot();
                }
            }
        };
        this.onScroll = (event) => {
            if (this.props.onScroll) {
                this.props.onScroll(event);
            }
        };
        this.state = {
            open: props.open,
            remove: !props.open
        };
        this.element = document.createElement('div');
        if (props.open) {
            BodyScroll_1.default.lock(true);
            DepthStack_1.default.push(this.close);
        }
    }
    preventClick(event) {
        event.stopPropagation();
    }
    async componentDidUpdate(prevProps) {
        if (this.props.open != prevProps.open) {
            if (this.props.open) {
                let runCount = this.runCount;
                await this.setState({
                    remove: false
                });
                if (runCount !== this.runCount) {
                    return;
                }
                this.updateModalRoot();
                BodyScroll_1.default.lock(true);
                await PromiseUtil_1.waitAnimation();
                await PromiseUtil_1.waitAnimation();
                this.setState({
                    open: this.props.open
                });
                DepthStack_1.default.push(this.close);
            }
            else {
                BodyScroll_1.default.unlock();
                this.setState({
                    open: this.props.open
                });
                DepthStack_1.default.remove(this.close);
            }
        }
    }
    updateModalRoot() {
        let modalRoot = Portal_1.default.getElement('layer-overlay');
        if (!modalRoot.contains(this.element)) {
            if (!this.state.remove) {
                modalRoot.appendChild(this.element);
            }
        }
        else {
            if (this.state.remove) {
                modalRoot.removeChild(this.element);
            }
        }
    }
    componentWillUnmount() {
        if (this.state.open) {
            BodyScroll_1.default.unlock();
            DepthStack_1.default.remove(this.close);
        }
        let modalRoot = Portal_1.default.getElement('layer-overlay');
        if (modalRoot.contains(this.element)) {
            modalRoot.removeChild(this.element);
        }
    }
    render() {
        let { className, id, direction, full, background, space } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('drawer');
        direction = direction || 'bottom';
        classNames.push('drawer-' + direction);
        if (this.state.open) {
            classNames.push('drawer-open');
        }
        if (full) {
            classNames.push('drawer-full');
        }
        if (background) {
            classNames.push('drawer-background');
        }
        if (space) {
            classNames.push('drawer-space');
        }
        let innerClassNames = ['drawer-content'];
        if (this.props.grid) {
            Grid_1.gridConfig(innerClassNames, this.props);
        }
        return ReactDOM.createPortal((React.createElement("div", { className: classNames.join(' '), id: id, onTransitionEnd: this.transitionEnd },
            React.createElement("div", { className: "drawer-background", onScroll: this.onScroll },
                React.createElement("div", { className: "drawer-scroller" },
                    React.createElement("div", { className: innerClassNames.join(' '), onClick: this.preventClick }, this.props.children))))), this.element);
    }
}
exports.default = Drawer;
//# sourceMappingURL=Drawer.js.map