"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Code extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('code');
        return (React.createElement("pre", Object.assign({ className: classNames.join(' ') }, this.props), this.props.children instanceof Array ?
            this.props.children.map(child => React.createElement("code", null, child))
            : React.createElement("code", null, this.props.children)));
    }
}
exports.default = Code;
//# sourceMappingURL=Code.js.map