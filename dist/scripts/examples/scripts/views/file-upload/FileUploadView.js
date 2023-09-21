"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class TableView extends React.Component {
    constructor() {
        super(...arguments);
        this.select = async (files) => {
            console.log('files:', files);
            return undefined;
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "File Upload", headerSpace: true, space: true },
            React.createElement(ArtistryReact_1.FileUpload, { onSelect: this.select })));
    }
}
exports.default = TableView;
//# sourceMappingURL=FileUploadView.js.map