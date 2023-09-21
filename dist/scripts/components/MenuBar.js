"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Portal_1 = require("../util/Portal");
class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
    }
    componentDidMount() {
        let fixedLayer = Portal_1.default.getElement('layer-fixed');
        if (!fixedLayer.contains(this.element)) {
            fixedLayer.appendChild(this.element);
        }
    }
    componentWillUnmount() {
        let fixedLayer = Portal_1.default.getElement('layer-fixed');
        if (fixedLayer.contains(this.element)) {
            fixedLayer.removeChild(this.element);
        }
    }
    onOpen(event) {
        event.preventDefault();
        if (this.props.onOpen) {
            this.props.onOpen(event);
        }
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('menu-bar');
        if (this.props.top) {
            classNames.push('menu-bar-top');
        }
        if (this.props.open) {
            classNames.push('menu-bar-open');
        }
        let menuBarTitle;
        if (this.props.title) {
            menuBarTitle = (React.createElement("div", { className: "menu-bar-title" }, this.props.title));
        }
        return ReactDOM.createPortal((React.createElement("div", { className: classNames.join(' '), id: this.props.id },
            this.props.top ? React.createElement("div", { className: "menu-bar-expander" },
                React.createElement("a", { href: "#", onClick: this.onOpen.bind(this) }, "\u2630")) : undefined,
            menuBarTitle,
            React.createElement("ul", null, this.props.children))), this.element);
    }
}
exports.default = MenuBar;
//# sourceMappingURL=MenuBar.js.map