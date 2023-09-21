"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class MenuBarView extends React.Component {
    constructor(props) {
        super(props);
        this.toggleUserMenu = (event) => {
            event.preventDefault();
            this.setState({ userMenuOpen: !this.state.userMenuOpen });
        };
        this.closeUserMenu = (event) => {
            event.preventDefault();
            this.setState({ userMenuOpen: false });
        };
        this.state = {
            userMenuOpen: false
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.MenuBar, { top: true, title: "React Artistry" },
            React.createElement(ArtistryReact_1.MenuBarLink, { active: true, title: "Home", href: "#" }),
            React.createElement(ArtistryReact_1.Spacer, null),
            React.createElement(ArtistryReact_1.MenuBarLink, { noLink: true, title: React.createElement(ArtistryReact_1.UserThumbnail, { src: "https://placebear.com/50/50", placeholder: "C", size: "small", popover: "Logout", popoverDirection: "bottom", popoverAlign: "right", popoverSpace: true }) }),
            React.createElement(ArtistryReact_1.MenuBarLink, { noLink: true, title: React.createElement(ArtistryReact_1.UserThumbnail, { src: "", placeholder: "C", size: "small", onClick: this.toggleUserMenu, popover: "Logout", popoverDirection: "bottom", popoverAlign: "right", popoverMenu: true, popoverSpace: true, popoverOpen: this.state.userMenuOpen, menuBarTop: true, onPopoverClose: this.closeUserMenu }) })));
    }
}
exports.default = MenuBarView;
//# sourceMappingURL=MenuBarView.js.map