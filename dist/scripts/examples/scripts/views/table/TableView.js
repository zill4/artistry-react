"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
let data = [{
        id: 0,
        ingredient: 'Potato',
        quantity: '8 - 10',
        unit: 'potato'
    }, {
        id: 1,
        ingredient: 'Salt',
        quantity: 1,
        unit: 'teaspoon'
    }, {
        id: 2,
        ingredient: 'Butter',
        quantity: '2',
        unit: 'tablespoon'
    }, {
        id: 3,
        ingredient: 'Pepper',
        quantity: 1,
        unit: 'dash'
    }, {
        id: 4,
        ingredient: 'Hot Milk',
        quantity: '1/4',
        unit: 'cup'
    }];
class TableView extends React.Component {
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Table", headerSpace: true },
            React.createElement(ArtistryReact_1.Table, { id: "table-component", data: data, columns: [{
                        header: 'Ingredient',
                        property: 'ingredient'
                    }, {
                        header: 'Quantity',
                        property: 'quantity',
                        template: item => React.createElement("th", { key: item.id },
                            React.createElement("strong", null, item.quantity))
                    }, {
                        header: 'Unit',
                        property: 'unit'
                    }] })));
    }
}
exports.default = TableView;
//# sourceMappingURL=TableView.js.map