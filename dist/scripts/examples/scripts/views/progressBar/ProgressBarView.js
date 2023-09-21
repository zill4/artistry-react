"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class ProgressBarView extends React.Component {
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Progress Bar", space: true, headerSpace: true },
            React.createElement("h3", null, "Default"),
            React.createElement(ArtistryReact_1.ProgressBar, { value: 50, min: 0, max: 100, decimal: 2, decimalFixed: true, showPercentage: true }),
            React.createElement("h3", null, "Success"),
            React.createElement(ArtistryReact_1.ProgressBar, { value: 50, min: 0, max: 100, decimal: 2, decimalFixed: true, showPercentage: true, type: "success" })));
    }
}
exports.default = ProgressBarView;
//# sourceMappingURL=ProgressBarView.js.map