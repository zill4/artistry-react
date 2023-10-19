"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollableTypeEnum = void 0;
const React = require("react");
var ScrollableTypeEnum;
(function (ScrollableTypeEnum) {
    ScrollableTypeEnum["auto"] = "auto";
    ScrollableTypeEnum["both"] = "both";
    ScrollableTypeEnum["none"] = "none";
    ScrollableTypeEnum["x"] = "x";
    ScrollableTypeEnum["y"] = "y";
    ScrollableTypeEnum["xAlways"] = "x-always";
    ScrollableTypeEnum["yAlways"] = "y-always";
    ScrollableTypeEnum["xNever"] = "x-never";
    ScrollableTypeEnum["yNever"] = "y-never";
})(ScrollableTypeEnum || (exports.ScrollableTypeEnum = ScrollableTypeEnum = {}));
class Scrollable extends React.Component {
    constructor() {
        super(...arguments);
        this.root = React.createRef();
        this.topBumper = React.createRef();
        this.rightBumper = React.createRef();
        this.bottomBumper = React.createRef();
        this.leftBumper = React.createRef();
        this.topIntersected = false;
        this.rightIntersected = false;
        this.bottomIntersected = false;
        this.leftIntersected = false;
        this.onScroll = (event) => {
            if (this.props.onScroll) {
                this.props.onScroll(event);
            }
        };
    }
    componentDidMount() {
        let root = this.root.current;
        let topBumper = this.topBumper.current;
        let rightBumper = this.rightBumper.current;
        let bottomBumper = this.bottomBumper.current;
        let leftBumper = this.leftBumper.current;
        this.rootObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                switch (entry.target.className) {
                    case 'scrollable-bumper-top':
                        if (entry.isIntersecting !== this.topIntersected) {
                            if (entry.isIntersecting) {
                                if (this.props.onTopEnter) {
                                    this.props.onTopEnter(entry, observer);
                                }
                                this.topIntersected = true;
                            }
                            else {
                                if (this.props.onTopExit) {
                                    this.props.onTopExit(entry, observer);
                                }
                                this.topIntersected = false;
                            }
                        }
                        break;
                    case 'scrollable-bumper-right':
                        if (entry.isIntersecting !== this.rightIntersected) {
                            if (entry.isIntersecting) {
                                if (this.props.onRightEnter) {
                                    this.props.onRightEnter(entry, observer);
                                }
                                this.rightIntersected = true;
                            }
                            else {
                                if (this.props.onRightExit) {
                                    this.props.onRightExit(entry, observer);
                                }
                                this.rightIntersected = false;
                            }
                        }
                        break;
                    case 'scrollable-bumper-bottom':
                        if (entry.isIntersecting !== this.bottomIntersected) {
                            if (entry.isIntersecting) {
                                if (this.props.onBottomEnter) {
                                    this.props.onBottomEnter(entry, observer);
                                }
                                this.bottomIntersected = true;
                            }
                            else {
                                if (this.props.onBottomExit) {
                                    this.props.onBottomExit(entry, observer);
                                }
                                this.bottomIntersected = false;
                            }
                        }
                        break;
                    case 'scrollable-bumper-left':
                        if (entry.isIntersecting !== this.leftIntersected) {
                            if (entry.isIntersecting) {
                                if (this.props.onLeftEnter) {
                                    this.props.onLeftEnter(entry, observer);
                                }
                                this.leftIntersected = true;
                            }
                            else {
                                if (this.props.onLeftExit) {
                                    this.props.onLeftExit(entry, observer);
                                }
                                this.leftIntersected = false;
                            }
                        }
                        break;
                }
            });
        }, {
            root: root,
            rootMargin: '0px',
            threshold: [0]
        });
        this.rootObserver.observe(topBumper);
        this.rootObserver.observe(rightBumper);
        this.rootObserver.observe(bottomBumper);
        this.rootObserver.observe(leftBumper);
    }
    componentWillUnmount() {
        if (this.rootObserver) {
            this.rootObserver.disconnect();
        }
    }
    render() {
        let { id, className, type, height, maxHeight, bumper } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('scrollable');
        if (typeof height === 'number') {
            height = height + 'px';
        }
        if (typeof maxHeight === 'number') {
            maxHeight = maxHeight + 'px';
        }
        if (typeof bumper === 'number') {
            bumper = bumper + 'px';
        }
        let style = {};
        if (bumper) {
            style['--scrollable-bumper-size'] = bumper;
        }
        if (height) {
            style.height = height;
        }
        else if (maxHeight) {
            style.maxHeight = maxHeight;
        }
        return (React.createElement("div", { ref: this.root, className: classNames.join(' '), id: id, "data-scroll": ScrollableTypeEnum[type], onScroll: this.onScroll, style: style },
            React.createElement("div", { className: "scrollable-bumper" },
                React.createElement("div", { ref: this.topBumper, className: "scrollable-bumper-top" }),
                React.createElement("div", { ref: this.rightBumper, className: "scrollable-bumper-right" }),
                React.createElement("div", { ref: this.bottomBumper, className: "scrollable-bumper-bottom" }),
                React.createElement("div", { ref: this.leftBumper, className: "scrollable-bumper-left" }),
                this.props.children)));
    }
}
exports.default = Scrollable;
//# sourceMappingURL=Scrollable.js.map