"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Draggable_1 = require("./Draggable");
class Sortable extends React.Component {
    render() {
        return (React.createElement("div", null, this.props.items.map((item) => (React.createElement(Draggable_1.default, { item: item })))));
    }
}
exports.default = Sortable;
//# sourceMappingURL=Sortable.js.map