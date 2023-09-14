"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class TabView extends React.Component {
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Tab", space: true, headerSpace: true },
            React.createElement(ArtistryReact_1.Tab, { titles: ['Tab 1', 'Tab 2', 'Tab 3'], animated: true, space: true },
                React.createElement("div", null,
                    "Tab 1 Content",
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", className: "input" })),
                React.createElement("div", null,
                    "Tab 2 Content",
                    React.createElement("br", null),
                    "More Content",
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", className: "input" })),
                React.createElement("div", null,
                    "Tab 3 Content",
                    React.createElement("br", null),
                    "Event more Content",
                    React.createElement("br", null),
                    "Another line of Content",
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", className: "input" })))));
    }
}
exports.default = TabView;
//# sourceMappingURL=TabView.js.map