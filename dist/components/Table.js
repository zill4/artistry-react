"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ClassNames_1 = require("../util/ClassNames");
class Table extends React.Component {
    render() {
        let { className, id, data, headers, columns, template, templateTop, templateBottom, striped, hoverable, form } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('table');
        classNames.addTest('table-striped', striped);
        classNames.addTest('table-hoverable', hoverable);
        classNames.addTest('table-form', form);
        let renderedTitles = undefined;
        if (headers) {
            renderedTitles = headers.map((header, index) => {
                return (React.createElement("th", { key: index }, header));
            });
        }
        else if (columns) {
            renderedTitles = columns.map((column, index) => {
                return (React.createElement("th", { key: index, className: column.action ? 'action-column' : undefined }, typeof column.header === 'function' ?
                    column.header() :
                    column.header));
            });
        }
        let renderedBody;
        if (data) {
            if (template) {
                renderedBody = data.map((item, index) => template(item, index));
            }
            else if (columns) {
                renderedBody = data.map((item, index) => (React.createElement("tr", { key: index }, columns.map((column, index) => {
                    if (column.template) {
                        return column.template(item);
                    }
                    else if (column.property) {
                        return React.createElement("td", { key: 'td-' + index }, item[column.property]);
                    }
                    else {
                        return React.createElement("td", { key: 'td-' + index });
                    }
                }))));
            }
            else {
                renderedBody = data.map((item, index) => (React.createElement("tr", { key: index }, Object.values(item).map((value, index) => React.createElement("td", { key: index }, value)))));
            }
        }
        return (React.createElement("table", { className: classNames.toString(), id: id },
            renderedTitles ?
                React.createElement("thead", null,
                    React.createElement("tr", null, renderedTitles))
                : undefined,
            React.createElement("tbody", { className: this.props.list ? 'list' : '' },
                typeof templateTop === 'function' ? templateTop() : templateTop,
                renderedBody,
                typeof templateBottom === 'function' ? templateBottom() : templateBottom),
            React.createElement("tfoot", null,
                React.createElement("tr", null))));
    }
}
exports.default = Table;
//# sourceMappingURL=Table.js.map