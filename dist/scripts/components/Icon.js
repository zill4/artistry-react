"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Icon extends React.Component {
    render() {
        let { pack, name } = this.props;
        let iconName;
        if (pack) {
            iconName = '#' + pack + '___' + name;
        }
        else {
            iconName = '#' + name;
        }
        return (React.createElement("i", { className: "icon" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("use", { xlinkHref: iconName }))));
    }
}
exports.default = Icon;
//# sourceMappingURL=Icon.js.map