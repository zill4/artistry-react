"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class CodeView extends React.Component {
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Code", space: true, headerSpace: true },
            React.createElement(ArtistryReact_1.Code, null, '\
window.onload = function() {\r\n\
    console.log(\'started...\');\r\n\
}\
            ')));
    }
}
exports.default = CodeView;
//# sourceMappingURL=CodeView.js.map