"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
const TimeInput_1 = require("../../../../src/components/TimeInput");
class FormView extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            date: new Date(Date.now()),
            amount: 0
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Form", headerSpace: true },
            React.createElement(ArtistryReact_1.Form, { screenSize: "small", onEnter: (event) => {
                    event.preventDefault();
                    console.log('enter');
                }, onEscape: (event) => {
                    event.preventDefault();
                    console.log('escape');
                } },
                React.createElement(ArtistryReact_1.FormGroup, { label: "Value" },
                    React.createElement(ArtistryReact_1.Input, { type: "text", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Text", text: "Text" },
                    React.createElement(ArtistryReact_1.Input, { type: "text", fill: true, required: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Success", theme: "success", text: "Success" },
                    React.createElement(ArtistryReact_1.Input, { type: "text", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Info", theme: "info", text: "Info" },
                    React.createElement(ArtistryReact_1.Input, { type: "text", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Warning", theme: "warning", text: "Warning" },
                    React.createElement(ArtistryReact_1.Input, { type: "text", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Error", theme: "danger", text: "Error" },
                    React.createElement(ArtistryReact_1.Input, { type: "text", fill: true })),
                React.createElement(ArtistryReact_1.Divider, null),
                React.createElement(ArtistryReact_1.FormText, { fill: true },
                    React.createElement("h2", null, "Masked Inputs")),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Time" },
                    React.createElement(ArtistryReact_1.Input, { mask: "[[0-23]]:[[0-59]]", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Phone" },
                    React.createElement(ArtistryReact_1.Input, { mask: "(999) 999-9999", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Color" },
                    React.createElement(ArtistryReact_1.Input, { mask: "#000000", fill: true })),
                React.createElement(ArtistryReact_1.Divider, null),
                React.createElement(ArtistryReact_1.FormText, { fill: true },
                    React.createElement("h3", null, "Test Examples")),
                React.createElement(ArtistryReact_1.FormGroup, { label: "99999" },
                    React.createElement(ArtistryReact_1.Input, { mask: "99999", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "aaaaa" },
                    React.createElement(ArtistryReact_1.Input, { mask: "aaaaa", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "nnnnn" },
                    React.createElement(ArtistryReact_1.Input, { mask: "nnnnn", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "[[0-23]]00000" },
                    React.createElement(ArtistryReact_1.Input, { mask: "[[0-23]]00000", fill: true })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "99aa99aa99aa" },
                    React.createElement(ArtistryReact_1.Input, { mask: "99aa99aa99aa", fill: true })),
                React.createElement(ArtistryReact_1.Divider, null),
                React.createElement(ArtistryReact_1.FormText, { fill: true },
                    React.createElement("h3", null, "Advanced Input")),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Time Input" },
                    React.createElement(TimeInput_1.default, { fill: true, value: this.state.date.toUTCString(), onChange: (event) => {
                            let value = event.target.value;
                            let date = new Date(this.state.date);
                            let parts = value.split(':').map(part => parseInt(part));
                            if (parts) {
                                date.setHours(parts[0], parts[1]);
                            }
                            this.setState({
                                date: date
                            });
                            console.log(date);
                        } })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Time Picker" },
                    React.createElement(ArtistryReact_1.TimePicker, { value: this.state.date, onChange: (event, date) => {
                            event;
                            if (date) {
                                this.setState({
                                    date: date
                                });
                                console.log(date);
                            }
                        } })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Time with Seconds" },
                    React.createElement(TimeInput_1.default, { fill: true, seconds: true, value: this.state.date.toUTCString(), onChange: (event) => {
                            let value = event.target.value;
                            let date = new Date(this.state.date);
                            let parts = value.split(':').map(part => parseInt(part));
                            if (parts) {
                                date.setHours(parts[0], parts[1], parts[2]);
                            }
                            this.setState({
                                date: date
                            });
                            console.log(date);
                        } })),
                React.createElement(ArtistryReact_1.FormGroup, { label: "Amount", nonLabel: true },
                    React.createElement(ArtistryReact_1.AmountInput, { value: this.state.amount, minimum: 1, maximum: 10, onChange: (value) => {
                            this.setState({
                                amount: value
                            });
                        } })),
                React.createElement(ArtistryReact_1.Divider, null),
                React.createElement(ArtistryReact_1.ActionBar, null,
                    React.createElement(ArtistryReact_1.Button, null, "Cancel"),
                    React.createElement(ArtistryReact_1.Button, { theme: "primary" }, "Save")))));
    }
}
exports.default = FormView;
//# sourceMappingURL=FormView.js.map