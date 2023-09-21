"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Draggable extends React.Component {
    constructor() {
        super(...arguments);
        this.dragging = false;
        this.onDrag = () => {
            this.dragging = true;
        };
        this.onDragEnd = () => {
            this.dragging = false;
        };
    }
    render() {
        return (React.createElement("div", { draggable: true, onDrag: this.onDrag, onDragEnd: this.onDragEnd }, this.props.item));
    }
}
exports.default = Draggable;
//# sourceMappingURL=Draggable.js.map