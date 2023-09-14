"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Align_1 = require("../util/Align");
const ClassNames_1 = require("../util/ClassNames");
class Cell extends React.Component {
    render() {
        let { id, className, columns, offset, align, width, leftMargin } = this.props;
        let classNames = new ClassNames_1.default(className);
        if (columns) {
            classNames.add('col-' + columns);
        }
        else {
            classNames.add('col');
        }
        if (offset) {
            classNames.add('offset-' + offset);
        }
        if (align) {
            Align_1.alignClass(align, classNames);
        }
        let fixed = false;
        let style = {};
        if (width) {
            if (typeof width === 'number') {
                width += 'px';
            }
            style['--col-width'] = width;
            fixed = true;
        }
        if (leftMargin) {
            if (typeof leftMargin === 'number') {
                leftMargin += 'px';
            }
            style['--col-offset'] = width;
            fixed = true;
        }
        if (fixed) {
            classNames.add('col-fixed');
        }
        return React.createElement("div", { className: classNames.toString(), id: id, style: style }, this.props.children);
    }
}
exports.default = Cell;
//# sourceMappingURL=Cell.js.map