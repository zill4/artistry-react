"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
const ImageGenerator_1 = require("../../util/ImageGenerator");
class VerticalCard extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClosed = () => {
            this.setState({
                closed: !this.state.closed
            });
        };
        this.state = {
            closed: true
        };
        this.image = ImageGenerator_1.default.createPlaceholder(350, 150);
    }
    render() {
        return (React.createElement(ArtistryReact_1.Card, { header: React.createElement("span", null, "Card Content"), nav: React.createElement(ArtistryReact_1.Button, { onClick: this.toggleClosed }, "Expand"), grid: true },
            React.createElement(ArtistryReact_1.Row, null,
                React.createElement(ArtistryReact_1.Cell, null,
                    React.createElement("img", { src: this.image }))),
            React.createElement(ArtistryReact_1.Row, null,
                React.createElement(ArtistryReact_1.Cell, null, "Card Content")),
            React.createElement(ArtistryReact_1.Closeable, { closed: this.state.closed },
                React.createElement(ArtistryReact_1.Grid, null,
                    React.createElement(ArtistryReact_1.Row, null,
                        React.createElement(ArtistryReact_1.Cell, null, "Card Content"))))));
    }
}
exports.default = VerticalCard;
//# sourceMappingURL=VerticalCard.js.map