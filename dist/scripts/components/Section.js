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
const Button_1 = require("./Button");
const Grid_1 = require("./Grid");
const PromiseUtil_1 = require("../util/PromiseUtil");
class Section extends React.Component {
    constructor() {
        super(...arguments);
        this.root = React.createRef();
        this.header = React.createRef();
        this.content = React.createRef();
        this.state = {
            closed: this.props.closed,
            running: false,
            animating: false,
            height: undefined
        };
        this.runCount = 0;
        this.close = () => {
            if (this.props.onClose) {
                let closed = typeof this.props.closed !== 'undefined' ?
                    this.props.closed :
                    (this.state.closed || false);
                this.props.onClose(closed);
            }
            else {
                this.setState({ closed: !this.state.closed });
            }
        };
        this.transitionEnd = async (event) => {
            if (event.propertyName === 'height') {
                let animating = this.state.animating;
                if (!animating) {
                    if (this.props.closed) {
                        await (0, PromiseUtil_1.setState)({
                            height: undefined,
                            running: false,
                            closed: true
                        }, this);
                    }
                    else {
                        await (0, PromiseUtil_1.setState)({
                            height: undefined,
                            running: false,
                            closed: false
                        }, this);
                    }
                }
            }
        };
    }
    async componentWillReceiveProps(nextProps) {
        if (this.props.closed !== nextProps.closed) {
            let node = this.root.current;
            let header = this.header.current;
            let content = this.content.current;
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
                    height: header.offsetHeight + 'px'
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
                    height: border / 2 + header.offsetHeight + content.offsetHeight + 'px'
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
                    height: border / 2 + header.offsetHeight + content.offsetHeight + 'px'
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
        let _a = this.props, { id, className, header, footer, closeable, closed, lockable, locked, space, headerSpace, footerSpace, relative, grid, gridColumns, gridSize, gridSpace } = _a, props = __rest(_a, ["id", "className", "header", "footer", "closeable", "closed", "lockable", "locked", "space", "headerSpace", "footerSpace", "relative", "grid", "gridColumns", "gridSize", "gridSpace"]);
        let classNames = className ? [className] : [];
        classNames.push('section');
        if (this.state.closed) {
            classNames.push('section-closed');
        }
        if (this.state.running) {
            classNames.push('section-run');
        }
        let innerClassNames = ['section-content'];
        if (lockable) {
            innerClassNames.push('lock-contents');
        }
        if (locked) {
            innerClassNames.push('locked');
        }
        if (space) {
            innerClassNames.push('section-content-space');
        }
        if (relative) {
            innerClassNames.push('section-content-relative');
        }
        if (grid) {
            (0, Grid_1.gridConfig)(innerClassNames, this.props);
        }
        return (React.createElement("section", Object.assign({ className: classNames.join(' '), id: id }, props, { style: { height: this.state.height }, onTransitionEnd: this.transitionEnd, ref: this.root }),
            React.createElement("header", { ref: this.header, className: headerSpace ? 'section-title' : undefined },
                header,
                closeable ?
                    React.createElement(Button_1.default, { className: "section-toggle", onClick: this.close }, "-")
                    : undefined),
            React.createElement("div", { className: innerClassNames.join(' '), ref: this.content }, this.props.children),
            footer ?
                React.createElement("footer", { className: footerSpace ? 'section-title' : undefined }, footer) :
                undefined));
    }
}
exports.default = Section;
//# sourceMappingURL=Section.js.map