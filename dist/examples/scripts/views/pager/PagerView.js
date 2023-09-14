"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class PagerView extends React.Component {
    constructor(props) {
        super(props);
        this.count = 20;
        this.onClickIndex = (index, event) => {
            this.setState({ index: index });
        };
        this.onClickBack = (event) => {
            this.setState({ index: this.state.index - 1 });
        };
        this.onClickForward = (event) => {
            this.setState({ index: this.state.index + 1 });
        };
        this.onClickStart = (event) => {
            this.setState({ index: 0 });
        };
        this.onClickEnd = (event) => {
            this.setState({ index: this.count - 1 });
        };
        this.state = {
            index: 1
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Pager", space: true, headerSpace: true },
            React.createElement(ArtistryReact_1.Pager, { count: 20, index: this.state.index, showCount: 7, showArrows: true, showEnds: true, onClickIndex: this.onClickIndex, onClickEnd: this.onClickEnd })));
    }
}
exports.default = PagerView;
//# sourceMappingURL=PagerView.js.map