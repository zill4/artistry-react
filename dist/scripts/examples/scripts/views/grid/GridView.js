"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class GridView extends React.Component {
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Grid", headerSpace: true },
            React.createElement("h3", null, "Grid"),
            React.createElement(ArtistryReact_1.Grid, { screenSize: "small", space: true },
                React.createElement(ArtistryReact_1.Row, null,
                    React.createElement(ArtistryReact_1.Cell, null, "Item 1"),
                    React.createElement(ArtistryReact_1.Cell, null, "Item 2"),
                    React.createElement(ArtistryReact_1.Cell, null, "Item 3")),
                React.createElement(ArtistryReact_1.Row, null,
                    React.createElement(ArtistryReact_1.Cell, { columns: 12 }, "Item 1")),
                React.createElement(ArtistryReact_1.Row, null,
                    React.createElement(ArtistryReact_1.Cell, { columns: 6 }, "Item 1"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 6 }, "Item 2")),
                React.createElement(ArtistryReact_1.Row, null,
                    React.createElement(ArtistryReact_1.Cell, { columns: 4 }, "Item 1"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 4 }, "Item 2"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 4 }, "Item 3")),
                React.createElement(ArtistryReact_1.Row, null,
                    React.createElement(ArtistryReact_1.Cell, { columns: 3 }, "Item 1"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 3 }, "Item 2"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 3 }, "Item 3"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 3 }, "Item 4")),
                React.createElement(ArtistryReact_1.Row, null,
                    React.createElement(ArtistryReact_1.Cell, { columns: 1, offset: 1 }, "Item 1"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 3, offset: 2 }, "Item 2"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 1 }, "Item 3"),
                    React.createElement(ArtistryReact_1.Cell, { columns: 1 }, "Item 4")))));
    }
}
exports.default = GridView;
//# sourceMappingURL=GridView.js.map