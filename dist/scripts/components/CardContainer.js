"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class CardContainer extends React.Component {
    render() {
        let { id, className, space, minWidth, maxWidth } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('card-container');
        if (space) {
            classNames.push('space');
        }
        if (minWidth && typeof minWidth === 'number') {
            minWidth += 'px';
        }
        if (maxWidth && typeof maxWidth === 'number') {
            maxWidth += 'px';
        }
        return (React.createElement("div", { className: classNames.join(' '), id: id, style: {
                '--card-min-width': minWidth,
                '--card-max-width': maxWidth
            } }, this.props.children));
    }
}
exports.default = CardContainer;
//# sourceMappingURL=CardContainer.js.map