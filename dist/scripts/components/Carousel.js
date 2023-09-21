"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PromiseUtil_1 = require("../util/PromiseUtil");
class Carousel extends React.Component {
    constructor() {
        super(...arguments);
        this.container = React.createRef();
        this.state = {
            height: undefined,
            activeIndex: this.props.activeIndex,
            previousActiveIndex: this.props.activeIndex,
            animating: false,
            selected: true
        };
        this.running = false;
        this.runCount = 0;
        this.transitionCount = 0;
        this.transitionEnd = async (event) => {
            if (event.propertyName === 'transform') {
                this.transitionCount++;
                this.transitionCount %= 2;
                if (!this.transitionCount) {
                    if (!this.running) {
                        this.setState({
                            animating: false,
                            height: undefined,
                            previousActiveIndex: this.state.activeIndex
                        });
                    }
                }
            }
        };
    }
    async componentWillReceiveProps(nextProps) {
        let { activeIndex } = nextProps;
        let { activeIndex: previousActiveIndex } = this.props;
        activeIndex = activeIndex || 0;
        previousActiveIndex = previousActiveIndex || 0;
        let children = this.props.children;
        if (children instanceof Array && children.length) {
            activeIndex %= children.length;
            previousActiveIndex %= children.length;
            if (activeIndex < 0) {
                activeIndex += children.length;
                activeIndex %= children.length;
            }
            if (previousActiveIndex < 0) {
                previousActiveIndex += children.length;
                previousActiveIndex %= children.length;
            }
        }
        else {
            activeIndex = 0;
            previousActiveIndex = 0;
        }
        if (activeIndex !== previousActiveIndex) {
            this.runCount++;
            let runCount = this.runCount;
            this.running = true;
            let node;
            if (!this.props.staticHeight) {
                node = this.container.current;
                await (0, PromiseUtil_1.setState)({ height: node.offsetHeight + 'px' }, this);
                if (runCount !== this.runCount) {
                    return;
                }
            }
            await (0, PromiseUtil_1.setState)({ animating: true }, this);
            if (runCount !== this.runCount) {
                return;
            }
            await (0, PromiseUtil_1.setState)({
                activeIndex: activeIndex,
                previousActiveIndex: previousActiveIndex,
                selected: false
            }, this);
            await (0, PromiseUtil_1.waitAnimation)(1);
            if (runCount !== this.runCount) {
                return;
            }
            await (0, PromiseUtil_1.setState)({ selected: true }, this);
            if (runCount !== this.runCount) {
                return;
            }
            if (!this.props.staticHeight) {
                let computedStyle = window.getComputedStyle(node, null);
                let paddingHeight = parseFloat(computedStyle.getPropertyValue('border-top-width')) +
                    parseFloat(computedStyle.getPropertyValue('border-bottom-width')) +
                    parseFloat(computedStyle.getPropertyValue('padding-top')) +
                    parseFloat(computedStyle.getPropertyValue('padding-bottom'));
                let activeChild = node.querySelector('.carousel-selected');
                if (activeChild) {
                    await (0, PromiseUtil_1.setState)({ height: paddingHeight + activeChild.clientHeight + 'px' }, this);
                }
                if (runCount !== this.runCount) {
                    return;
                }
            }
            if (this.running) {
                if (this.props.staticHeight) {
                    await (0, PromiseUtil_1.setState)({
                        animating: false,
                        height: undefined,
                        previousActiveIndex: this.state.activeIndex
                    }, this);
                }
                this.running = false;
            }
        }
    }
    componentWillUnmount() {
        this.runCount++;
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('carousel');
        if (this.state.animating) {
            classNames.push('carousel-run');
        }
        if (this.props.fillHeight) {
            classNames.push('fill-height');
        }
        switch (this.props.animation) {
            case 'slide':
                break;
            case 'slide-fade':
                classNames.push('carousel-animate-fade');
                break;
            case 'fade':
                classNames.push('carousel-animate-fade');
                break;
            case 'flip':
                classNames.push('carousel-animate-flip');
                break;
            default:
                break;
        }
        if (this.props.safe) {
            classNames.push('carousel-safe');
        }
        if (this.props.scroll) {
            classNames.push('scrollable');
        }
        if (this.props.space) {
            classNames.push('carousel-space');
        }
        let children;
        if (this.props.children instanceof Array) {
            if (this.state.activeIndex !== this.state.previousActiveIndex) {
                if (this.state.activeIndex < this.state.previousActiveIndex) {
                    children = React.createElement(React.Fragment, null,
                        React.createElement("div", { key: this.state.activeIndex, className: this.state.selected ? "carousel-selected" : "" }, this.props.children[this.state.activeIndex]),
                        React.createElement("div", { key: this.state.previousActiveIndex, className: this.state.selected ? "" : "carousel-selected" }, this.props.children[this.state.previousActiveIndex]));
                }
                else {
                    children = React.createElement(React.Fragment, null,
                        React.createElement("div", { key: this.state.previousActiveIndex, className: this.state.selected ? "" : "carousel-selected" }, this.props.children[this.state.previousActiveIndex]),
                        React.createElement("div", { key: this.state.activeIndex, className: this.state.selected ? "carousel-selected" : "" }, this.props.children[this.state.activeIndex]));
                }
            }
            else {
                children = React.createElement(React.Fragment, null,
                    React.createElement("div", { key: this.state.activeIndex, className: this.state.selected ? "carousel-selected" : "" }, this.props.children[this.state.activeIndex]));
            }
        }
        else {
            children = React.createElement(React.Fragment, null,
                React.createElement("div", { key: this.state.activeIndex, className: this.state.selected ? "carousel-selected" : "" }, this.props.children));
        }
        return (React.createElement("div", { className: classNames.join(' '), id: this.props.id, style: { height: this.state.height }, "data-scroll": this.props.scroll, onTransitionEnd: this.transitionEnd, ref: this.container }, children));
    }
}
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map