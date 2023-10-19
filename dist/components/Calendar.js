"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Button_1 = require("./Button");
const ButtonGroup_1 = require("./ButtonGroup");
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.increaseMonth = () => {
            this.setState({ month: (this.state.month + 1) % 12 });
        };
        this.decreaseMonth = () => {
            this.setState({ month: (this.state.month + 11) % 12 });
        };
        this.increaseYear = () => {
            this.setState({ year: this.state.year + 1 });
        };
        this.decreaseYear = () => {
            this.setState({ year: this.state.year - 1 });
        };
        this.selectDay = (day) => {
            if (this.props.onSelect) {
                this.props.onSelect(day);
            }
        };
        var date = this.props.date || new Date(Date.now());
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date
        };
    }
    getDays(year, month) {
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var days = [firstDay];
        for (var index = 2, length = lastDay.getDate(); index < length; index++) {
            days.push(new Date(year, month, index));
        }
        days.push(lastDay);
        return days;
    }
    getWeeks(year, month) {
        var days = this.getDays(year, month);
        var weeks = [];
        var week;
        if (days[0].getDay() !== 0) {
            week = [];
            weeks.push(week);
        }
        days.forEach(function (day) {
            if (day.getDay() === 0) {
                week = [];
                weeks.push(week);
            }
            week.push(day);
        });
        return weeks;
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.date) {
            let year = nextProps.date.getFullYear();
            let month = nextProps.date.getMonth();
            if (!this.props.date ||
                this.props.date.getFullYear() !== year ||
                this.props.date.getMonth() !== month) {
                this.setState({
                    year: year,
                    month: month
                });
            }
        }
    }
    render() {
        var weeks = this.getWeeks(this.state.year, this.state.month);
        let years = [];
        let year = this.state.year;
        for (let index = -100, length = 200; index <= length; index++) {
            years.push(year + index);
        }
        if (this.props.date) {
            var selectedDate = {
                year: this.props.date.getFullYear(),
                month: this.props.date.getMonth(),
                date: this.props.date.getDate()
            };
        }
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let todayTime = today.getTime();
        return (React.createElement("div", { className: "calendar" },
            React.createElement("div", { className: "calendar-title" },
                React.createElement(ButtonGroup_1.default, null,
                    React.createElement(Button_1.default, { onClick: this.decreaseYear }, "-"),
                    React.createElement("select", { className: "input", style: { flexGrow: 1 }, value: this.state.year, onChange: (event) => {
                            this.setState({
                                year: parseInt(event.target.value)
                            });
                        } }, years.map(year => React.createElement("option", { value: year, key: year }, year))),
                    React.createElement(Button_1.default, { onClick: this.increaseYear }, "+")),
                React.createElement(ButtonGroup_1.default, null,
                    React.createElement(Button_1.default, { onClick: this.decreaseMonth }, "-"),
                    React.createElement("select", { className: "input", style: { flexGrow: 1 }, value: this.state.month + 1, onChange: (event) => {
                            this.setState({
                                month: parseInt(event.target.value) - 1
                            });
                        } },
                        React.createElement("option", { value: "1" }, "January"),
                        React.createElement("option", { value: "2" }, "February"),
                        React.createElement("option", { value: "3" }, "March"),
                        React.createElement("option", { value: "4" }, "April"),
                        React.createElement("option", { value: "5" }, "May"),
                        React.createElement("option", { value: "6" }, "June"),
                        React.createElement("option", { value: "7" }, "July"),
                        React.createElement("option", { value: "8" }, "August"),
                        React.createElement("option", { value: "9" }, "September"),
                        React.createElement("option", { value: "10" }, "October"),
                        React.createElement("option", { value: "11" }, "November"),
                        React.createElement("option", { value: "12" }, "December")),
                    React.createElement(Button_1.default, { onClick: this.increaseMonth }, "+"))),
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "S"),
                        React.createElement("th", null, "M"),
                        React.createElement("th", null, "T"),
                        React.createElement("th", null, "W"),
                        React.createElement("th", null, "T"),
                        React.createElement("th", null, "F"),
                        React.createElement("th", null, "S"))),
                React.createElement("tbody", null, weeks.map((week, index, array) => {
                    return (React.createElement("tr", { key: this.state.year + ' ' + this.state.month + ' ' + index },
                        index === 0 && week.length < 7 ?
                            React.createElement("td", { colSpan: 7 - week.length })
                            : undefined,
                        week.map((day, index, array) => {
                            var selected = compareDays(selectedDate, day);
                            var current = todayTime === day.getTime();
                            let dayClassName = undefined;
                            if (selected) {
                                dayClassName = 'calendar-day-selected';
                            }
                            else if (current) {
                                dayClassName = 'calendar-day-current';
                            }
                            return (React.createElement("td", { key: this.state.year + ' ' + this.state.month + ' ' + index },
                                React.createElement("a", { className: dayClassName, onClick: this.selectDay.bind(this, day) }, day.getDate())));
                        }),
                        index > 0 && week.length < 7 ?
                            React.createElement("td", { colSpan: 7 - week.length })
                            : undefined));
                })))));
    }
}
exports.default = Calendar;
function compareDays(selectedDate, date) {
    if (selectedDate &&
        selectedDate.year === date.getFullYear() &&
        selectedDate.month === date.getMonth() &&
        selectedDate.date === date.getDate()) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=Calendar.js.map