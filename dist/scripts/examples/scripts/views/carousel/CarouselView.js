"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class CarouselView extends React.Component {
    constructor(props) {
        super(props);
        this.nextCarouselSlide = () => {
            this.setState({ activeIndex: this.state.activeIndex + 1 });
        };
        this.backCarouselSlide = () => {
            this.setState({ activeIndex: this.state.activeIndex - 1 });
        };
        this.state = {
            activeIndex: 0
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Carousel", headerSpace: true },
            React.createElement(ArtistryReact_1.ActionBar, { align: "space-between" },
                React.createElement(ArtistryReact_1.Button, { onClick: this.backCarouselSlide }, "Back"),
                React.createElement(ArtistryReact_1.Button, { onClick: this.nextCarouselSlide }, "Next")),
            React.createElement(ArtistryReact_1.Divider, null),
            React.createElement(ArtistryReact_1.Carousel, { activeIndex: this.state.activeIndex, animation: "slide", space: true },
                React.createElement("div", { style: { backgroundColor: "red", padding: "10px" } }, "Content 0"),
                React.createElement("div", { style: { backgroundColor: "blue", padding: "10px" } },
                    "Content 1",
                    React.createElement("br", null),
                    " Line 2"),
                React.createElement("div", { style: { backgroundColor: "yellow", padding: "10px" } },
                    "Content 2",
                    React.createElement("br", null),
                    " Line 2",
                    React.createElement("br", null),
                    " Line 3")),
            React.createElement(ArtistryReact_1.Divider, null),
            React.createElement(ArtistryReact_1.Carousel, { activeIndex: this.state.activeIndex, animation: "flip", space: true },
                React.createElement("div", { style: { backgroundColor: "red", padding: "10px" } }, "Content 0"),
                React.createElement("div", { style: { backgroundColor: "blue", padding: "10px" } },
                    "Content 1",
                    React.createElement("br", null),
                    " Line 2"),
                React.createElement("div", { style: { backgroundColor: "yellow", padding: "10px" } },
                    "Content 2",
                    React.createElement("br", null),
                    " Line 2",
                    React.createElement("br", null),
                    " Line 3"))));
    }
}
exports.default = CarouselView;
//# sourceMappingURL=CarouselView.js.map