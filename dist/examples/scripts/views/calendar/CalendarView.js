"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class CalendarView extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            date: undefined
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Calendar", space: true, headerSpace: true },
            React.createElement(ArtistryReact_1.FormGroup, { label: "Calendar" },
                React.createElement(ArtistryReact_1.DatePicker, { date: this.state.date, onSelect: (date) => {
                        this.setState({
                            date: date
                        });
                    } }))));
    }
}
exports.default = CalendarView;
//# sourceMappingURL=CalendarView.js.map