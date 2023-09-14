"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
const PromiseUtil_1 = require("../../../../src/util/PromiseUtil");
let data = [{
        ingredient: 'Potato',
        quantity: '8 - 10',
        unit: 'potato'
    }, {
        ingredient: 'Salt',
        quantity: 1,
        unit: 'teaspoon'
    }, {
        ingredient: 'Butter',
        quantity: '2',
        unit: 'tablespoon'
    }, {
        ingredient: 'Pepper',
        quantity: 1,
        unit: 'dash'
    }, {
        ingredient: 'Hot Milk',
        quantity: '1/4',
        unit: 'cup'
    }, {
        ingredient: 'Scallions',
        quantity: '1/8',
        unit: 'cup'
    }, {
        ingredient: 'Cheese',
        quantity: '1/8',
        unit: 'cup'
    }];
class ListView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onChange = async (event) => {
            this.setState({
                searchValue: event.target.value
            });
            await PromiseUtil_1.wait(1000);
            this.setState({
                showOptions: true,
                options: data
            });
        };
        this.onSelectOption = (event, value) => {
            this.setState({
                searchValue: value,
                showOptions: false
            });
        };
        this.onSearch = (event, value) => {
            this.setState({
                searchValue: value,
                showOptions: false
            });
        };
        this.onClose = (event) => {
            this.setState({
                showOptions: false
            });
        };
        this.state = {
            searchValue: '',
            showOptions: false,
            options: []
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "List", headerSpace: true },
            React.createElement(ArtistryReact_1.Grid, { space: true },
                React.createElement(ArtistryReact_1.Row, null,
                    React.createElement(ArtistryReact_1.Cell, null,
                        React.createElement(ArtistryReact_1.Search, { value: this.state.searchValue, options: [
                                'Option 1',
                                'Option 2',
                                'Option 3'
                            ], showOptions: this.state.showOptions, onChange: this.onChange, onSelectOption: this.onSelectOption, onSearch: this.onSearch, onClose: this.onClose, altAction: this.altAction, fill: true, buttonText: React.createElement("span", { className: "nowrap" },
                                React.createElement(ArtistryReact_1.Icon, { name: "search" }),
                                " Search"), screenSize: "small" })))),
            React.createElement(ArtistryReact_1.List, { data: this.state.options, template: item => item.ingredient, active: 3, selected: [1, 3, 5], space: true })));
    }
}
exports.default = ListView;
//# sourceMappingURL=ListView.js.map