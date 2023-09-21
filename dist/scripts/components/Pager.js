"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Pager extends React.Component {
    constructor() {
        super(...arguments);
        this.onClickBack = (event) => {
            event.preventDefault();
            if (this.props.index > 0) {
                if (this.props.onClickIndex) {
                    this.props.onClickIndex(this.props.index - 1, event);
                }
            }
        };
        this.onClickForward = (event) => {
            event.preventDefault();
            if (this.props.index < this.props.count - 1) {
                if (this.props.onClickIndex) {
                    this.props.onClickIndex(this.props.index + 1, event);
                }
            }
        };
        this.onClickStart = (event) => {
            event.preventDefault();
            if (this.props.index > 0) {
                if (this.props.onClickIndex) {
                    this.props.onClickIndex(0, event);
                }
            }
        };
        this.onClickEnd = (event) => {
            event.preventDefault();
            if (this.props.index < this.props.count - 1) {
                if (this.props.onClickEnd) {
                    this.props.onClickEnd(event);
                }
            }
        };
    }
    onClickIndex(index, event) {
        event.preventDefault();
        if (this.props.onClickIndex) {
            this.props.onClickIndex(index, event);
        }
    }
    render() {
        let { className, id, index, count, showCount, showArrows, showEnds, zeroIndexed } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('pager');
        let low = Math.max(index - Math.floor(showCount / 2), 0);
        let high = Math.min(low + showCount, count);
        if (high - low < showCount) {
            low = Math.max(high - showCount, 0);
        }
        let offset = zeroIndexed ? 0 : 1;
        let pagers = [];
        for (var pagerIndex = low; pagerIndex < high; pagerIndex++) {
            let active = pagerIndex === index;
            pagers.push(React.createElement("li", { key: pagerIndex.toString(), className: active ? 'pager-active' : undefined },
                React.createElement("a", { href: "#", onClick: this.onClickIndex.bind(this, pagerIndex) }, pagerIndex + offset)));
        }
        return (React.createElement("ul", { className: classNames.join(' '), id: id },
            showEnds ?
                React.createElement("li", { key: "start", className: index === 0 ? 'pager-disabled' : undefined },
                    React.createElement("a", { href: "#", onClick: this.onClickStart }, "<<"))
                : undefined,
            showArrows ?
                React.createElement("li", { key: "back", className: index === 0 ? 'pager-disabled' : undefined },
                    React.createElement("a", { href: "#", onClick: this.onClickBack }, "<"))
                : undefined,
            pagers,
            showArrows ?
                React.createElement("li", { key: "next", className: index >= count - 1 ? 'pager-disabled' : undefined },
                    React.createElement("a", { href: "#", onClick: this.onClickForward }, ">"))
                : undefined,
            showEnds ?
                React.createElement("li", { key: "end", className: index >= count - 1 ? 'pager-disabled' : undefined },
                    React.createElement("a", { href: "#", onClick: this.onClickEnd }, ">>"))
                : undefined));
    }
}
exports.default = Pager;
//# sourceMappingURL=Pager.js.map