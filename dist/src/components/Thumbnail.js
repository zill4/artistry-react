"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Thumbnail extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('thumbnail');
        return (React.createElement("img", { className: classNames.join(' '), id: this.props.id, src: this.props.src }));
    }
}
exports.default = Thumbnail;
//# sourceMappingURL=Thumbnail.js.map