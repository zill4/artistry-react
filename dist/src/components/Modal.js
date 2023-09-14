"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Button_1 = require("./Button");
const Grid_1 = require("./Grid");
const BodyScroll_1 = require("../util/BodyScroll");
const PromiseUtil_1 = require("../util/PromiseUtil");
const Portal_1 = require("../util/Portal");
const DepthStack_1 = require("../util/DepthStack");
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.runCount = 0;
        this.close = (event) => {
            if (this.props.onClose) {
                return this.props.onClose(event);
            }
            else {
                return false;
            }
        };
        this.confirm = (event) => {
            if (this.props.onConfirm) {
                return this.props.onConfirm(event);
            }
            else {
                return false;
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
        let target = event.target;
        if (!target.classList || !(target.classList.contains('modal') || target.classList.contains('drawer'))) {
            event.stopPropagation();
        }
    }
    async componentDidUpdate(prevProps) {
        if (this.props.open != prevProps.open) {
            if (this.props.open) {
                DepthStack_1.default.blur();
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
                DepthStack_1.default.push(this.close, this.confirm);
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
        let { animation, background, screenSize, closeable, closeButton, title, header, footer } = this.props;
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('modal');
        if (this.state.open) {
            classNames.push('modal-open');
        }
        if (background) {
            classNames.push('modal-background');
        }
        if (animation) {
            classNames.push('modal-animate-' + animation.trim());
        }
        if (screenSize) {
            let sizes = (screenSize instanceof Array) ? screenSize : [screenSize];
            sizes.forEach(size => {
                switch (size) {
                    case 'all':
                        classNames.push('modal-all');
                        break;
                    case 'x-small':
                        classNames.push('modal-xs');
                        break;
                    case 'small':
                        classNames.push('modal-sm');
                        break;
                    case 'medium':
                        classNames.push('modal-md');
                        break;
                    case 'large':
                        classNames.push('modal-lg');
                        break;
                    case 'x-large':
                        classNames.push('modal-xl');
                        break;
                }
            });
        }
        let modalContentClassNames = [];
        if (this.props.lockable) {
            modalContentClassNames.push('lock-contents');
            if (this.props.locked) {
                modalContentClassNames.push('locked');
            }
        }
        if (this.props.space) {
            if (title || footer) {
                modalContentClassNames.push('modal-space');
            }
            else {
                modalContentClassNames.push('modal-space');
            }
        }
        if (this.props.grid) {
            Grid_1.gridConfig(modalContentClassNames, this.props);
        }
        let headerSection;
        if (title || header || closeable) {
            headerSection = (React.createElement("div", { className: "modal-header" },
                React.createElement("div", { className: "modal-title" }, title),
                closeable ?
                    React.createElement("div", { className: "action-bar" },
                        React.createElement(Button_1.default, { onClick: this.props.onClose, displaySize: "small" }, closeButton || 'Close')) :
                    null,
                React.createElement("div", null, header)));
        }
        return ReactDOM.createPortal((React.createElement("div", { className: classNames.join(' '), id: this.props.id, onTransitionEnd: this.transitionEnd, onScroll: this.onScroll },
            React.createElement("div", { className: "modal-background" }, headerSection || footer ?
                React.createElement("div", { className: "modal-content", onClick: this.preventClick },
                    headerSection,
                    React.createElement("div", { className: 'modal-body ' + modalContentClassNames.join(' '), onScroll: this.onScroll }, this.props.children),
                    footer ?
                        React.createElement("div", { className: "modal-footer" }, footer)
                        : undefined) :
                React.createElement("div", { className: 'modal-content ' + modalContentClassNames.join(' '), onClick: this.preventClick }, this.props.children)))), this.element);
    }
}
exports.default = Modal;
//# sourceMappingURL=Modal.js.map