"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Carousel_1 = require("./Carousel");
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex
        };
    }
    selectPanel(index) {
        if (this.props.onSelectPanel) {
            this.props.onSelectPanel(index);
        }
        else {
            this.setState({ activeIndex: index });
        }
    }
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('tab-container');
        let activeIndex = typeof this.props.activeIndex !== 'undefined' ?
            this.props.activeIndex :
            (this.state.activeIndex || 0);
        if (this.props.space) {
            classNames.push('tab-space');
        }
        if (this.props.fillHeight) {
            classNames.push('fill-height');
        }
        return (React.createElement("div", { className: classNames.join(' '), id: this.props.id },
            React.createElement("ul", { className: "tab-header" }, this.props.titles ? this.props.titles.map((title, index) => {
                let className = activeIndex === index ? 'tab-title tab-active' : 'tab-title';
                return React.createElement("li", { className: className, key: index },
                    React.createElement("a", { onClick: this.selectPanel.bind(this, index) }, title));
            }) : undefined),
            this.props.animated ?
                React.createElement(Carousel_1.default, { className: "tab-carousel", activeIndex: activeIndex, safe: this.props.safe, staticHeight: this.props.staticHeight, scroll: this.props.scroll }, this.props.children)
                : React.createElement("div", { className: "tab-body" }, this.props.children instanceof Array ? this.props.children.map((child, index) => {
                    let className = activeIndex === index ? 'tab-panel tab-active' : 'tab-panel';
                    return React.createElement("div", { key: index, className: className }, child);
                }) : React.createElement("div", { key: 0, className: "tab-panel tab-active" }, this.props.children))));
    }
}
exports.default = Tab;
//# sourceMappingURL=Tab.js.map