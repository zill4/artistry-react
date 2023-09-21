"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Grid_1 = require("./Grid");
const Disabled_1 = require("../abilities/Disabled");
class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.onClick = (event) => {
            if (this.props.onClick) {
                this.props.onClick(event);
            }
        };
    }
    render() {
        let { id, className, header, footer, space, fill, nav, type, handle, square, grid, clickable, disabled } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('card');
        let innerClassNames = ['card-content'];
        if (space) {
            innerClassNames.push('card-content-space');
        }
        if (fill) {
            classNames.push('fill');
        }
        if (type) {
            classNames.push('card-type-' + type);
        }
        if (handle) {
            classNames.push('card-handle-' + handle);
        }
        if (square) {
            classNames.push('card-square');
        }
        if (grid) {
            (0, Grid_1.gridConfig)(innerClassNames, this.props);
        }
        if (clickable) {
            classNames.push('clickable');
        }
        (0, Disabled_1.disabledClass)(disabled, classNames);
        return (React.createElement("div", { className: classNames.join(' '), id: id, onClick: this.onClick },
            header ? React.createElement("header", null, header) : null,
            React.createElement("div", { className: innerClassNames.join(' ') }, this.props.children),
            nav ? React.createElement("nav", { className: 'card-nav' }, nav) : null,
            footer ? React.createElement("footer", null, footer) : null));
    }
}
exports.default = Card;
//# sourceMappingURL=Card.js.map