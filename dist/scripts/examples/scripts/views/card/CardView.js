"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
const VerticalCard_1 = require("./VerticalCard");
class CardView extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClosed = () => {
            this.setState({
                closed: !this.state.closed
            });
        };
        this.toggleFilled = () => {
            this.setState({
                filled: !this.state.filled
            });
        };
        this.clickNext = () => {
            this.setState({
                index: this.state.index + 1
            });
        };
        this.clickPrevious = () => {
            this.setState({
                index: this.state.index - 1
            });
        };
        this.state = {
            closed: false,
            index: 0
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Card", space: true, headerSpace: true },
            React.createElement("h3", null, "Card"),
            React.createElement(ArtistryReact_1.CardContainer, null,
                React.createElement(VerticalCard_1.default, null),
                React.createElement(ArtistryReact_1.Fillable, { card: true, filled: this.state.filled },
                    React.createElement(ArtistryReact_1.Card, { grid: true, space: true, fill: true },
                        React.createElement(ArtistryReact_1.Row, null,
                            React.createElement(ArtistryReact_1.Cell, null, "Card Content"),
                            React.createElement(ArtistryReact_1.Cell, null,
                                React.createElement(ArtistryReact_1.Button, { onClick: this.toggleClosed }, "Expand"),
                                React.createElement(ArtistryReact_1.Button, { onClick: this.toggleFilled }, "Fill"))),
                        React.createElement(ArtistryReact_1.Closeable, { closed: this.state.closed },
                            React.createElement(ArtistryReact_1.Grid, null,
                                React.createElement(ArtistryReact_1.Row, null,
                                    React.createElement(ArtistryReact_1.Cell, null, "Card Content"))))))),
            React.createElement(ArtistryReact_1.Card, { type: "success", handle: "left", square: true },
                React.createElement(ArtistryReact_1.CardSection, { multiColumn: true },
                    React.createElement(ArtistryReact_1.CardControl, { title: "Title 1" }, "Data 1"),
                    React.createElement(ArtistryReact_1.CardControl, { title: "Title 2" }, "Data 2"),
                    React.createElement(ArtistryReact_1.CardControl, { title: "Title 3" }, "Data 3"),
                    React.createElement(ArtistryReact_1.CardControl, { title: "Title 4" }, "Data 4"))),
            React.createElement("div", null,
                React.createElement(ArtistryReact_1.Button, { onClick: this.clickPrevious }, "<"),
                React.createElement(ArtistryReact_1.CardCarousel, { activeIndex: this.state.index },
                    React.createElement(ArtistryReact_1.Card, { type: "success", handle: "left", square: true },
                        React.createElement(ArtistryReact_1.CardSection, { multiColumn: true },
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 1" }, "Data 1"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 2" }, "Data 2"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 3" }, "Data 3"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    React.createElement(ArtistryReact_1.Card, { type: "success", handle: "left", square: true },
                        React.createElement(ArtistryReact_1.CardSection, { multiColumn: true },
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 1" }, "Data 1"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 2" }, "Data 2"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 3" }, "Data 3"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    React.createElement(ArtistryReact_1.Card, { type: "success", handle: "left", square: true },
                        React.createElement(ArtistryReact_1.CardSection, { multiColumn: true },
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 1" }, "Data 1"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 2" }, "Data 2"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 3" }, "Data 3"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    React.createElement(ArtistryReact_1.Card, { type: "success", handle: "left", square: true },
                        React.createElement(ArtistryReact_1.CardSection, { multiColumn: true },
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 1" }, "Data 1"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 2" }, "Data 2"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 3" }, "Data 3"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    React.createElement(ArtistryReact_1.Card, { type: "success", handle: "left", square: true },
                        React.createElement(ArtistryReact_1.CardSection, { multiColumn: true },
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 1" }, "Data 1"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 2" }, "Data 2"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 3" }, "Data 3"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 4" }, "Data 4"))),
                    React.createElement(ArtistryReact_1.Card, { type: "success", handle: "left", square: true },
                        React.createElement(ArtistryReact_1.CardSection, { multiColumn: true },
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 1" }, "Data 1"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 2" }, "Data 2"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 3" }, "Data 3"),
                            React.createElement(ArtistryReact_1.CardControl, { title: "Title 4" }, "Data 4")))),
                React.createElement(ArtistryReact_1.Button, { onClick: this.clickNext }, ">"))));
    }
}
exports.default = CardView;
//# sourceMappingURL=CardView.js.map