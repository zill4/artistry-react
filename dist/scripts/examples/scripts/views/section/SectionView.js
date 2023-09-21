"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class SectionView extends React.Component {
    constructor(props) {
        super(props);
        this.close = () => {
            this.setState({ closed: !this.state.closed });
        };
        this.lockContents = () => {
            this.setState({ locked: true });
            window.setTimeout(() => {
                this.setState({ locked: false });
            }, 1000);
        };
        this.state = {
            locked: false,
            closed: false
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Section", space: true, headerSpace: true, lockable: true, closeable: true, locked: this.state.locked, closed: this.state.closed, onClose: this.close },
            "Section Content",
            React.createElement("br", null),
            React.createElement(ArtistryReact_1.Button, { onClick: this.lockContents }, "Lock")));
    }
}
exports.default = SectionView;
//# sourceMappingURL=SectionView.js.map