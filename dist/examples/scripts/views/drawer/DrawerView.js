"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class DrawerView extends React.Component {
    constructor(props) {
        super(props);
        this.openDrawer = () => {
            this.setState({ drawerOpen: true });
        };
        this.closeDrawer = () => {
            this.setState({ drawerOpen: false });
        };
        this.state = {
            drawerOpen: false
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Drawer", space: true, headerSpace: true },
            React.createElement(ArtistryReact_1.Button, { onClick: this.openDrawer }, "Open Drawer"),
            React.createElement(ArtistryReact_1.Drawer, { open: this.state.drawerOpen, onClose: this.closeDrawer },
                React.createElement(ArtistryReact_1.Button, { onClick: this.closeDrawer, className: "pull-right" }, "Close"),
                React.createElement("p", null, "Drawer Content"),
                React.createElement("br", null),
                React.createElement(ArtistryReact_1.Form, null,
                    React.createElement(ArtistryReact_1.FormGroup, { label: "Input" },
                        React.createElement("input", { className: "input" })),
                    React.createElement(ArtistryReact_1.Divider, null),
                    React.createElement(ArtistryReact_1.ActionBar, null,
                        React.createElement(ArtistryReact_1.Button, { theme: "primary" }, "OK"))))));
    }
}
exports.default = DrawerView;
//# sourceMappingURL=DrawerView.js.map