"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class ScrollableView extends React.Component {
    constructor() {
        super(...arguments);
        this.bottom = async () => {
            console.log('bottom!');
        };
    }
    render() {
        let values = [];
        for (let index = 0; index < 100; index++) {
            values.push(index);
        }
        return (React.createElement(ArtistryReact_1.Section, { header: "Scrollable", headerSpace: true },
            React.createElement(ArtistryReact_1.Scrollable, { type: "y", height: "200px", bumper: 10, onBottomEnter: this.bottom },
                React.createElement(ArtistryReact_1.CardContainer, { space: true }, values.map((value, index) => React.createElement(ArtistryReact_1.Card, { key: index, header: "Card", space: true }, value))))));
    }
}
exports.default = ScrollableView;
//# sourceMappingURL=ScrollableView.js.map