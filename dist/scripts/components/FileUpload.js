"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class FileUpload extends React.Component {
    constructor() {
        super(...arguments);
        this.fileInput = React.createRef();
        this.state = {
            dragging: false,
            uploading: false
        };
        this.handleFiles = (files) => {
            this.setState({
                uploading: true
            }, async () => {
                await this.props.onSelect(files);
                this.setState({
                    uploading: false
                });
            });
        };
        this.click = () => {
            this.fileInput.current.click();
        };
        this.clickStop = (event) => {
            event.stopPropagation();
        };
        this.select = () => {
            let fileInput = this.fileInput.current;
            let files = fileInput.files;
            if (files && files.length) {
                this.handleFiles(files);
            }
        };
        this.drop = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.dragLeave(event);
            let files = event.dataTransfer.files;
            if (files && files.length) {
                this.handleFiles(files);
            }
        };
        this.dragEnter = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                dragging: true
            });
        };
        this.dragLeave = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.setState({
                dragging: false
            });
        };
    }
    render() {
        let { id, className, text, value } = this.props;
        let classNames = className ? [className] : [];
        classNames.push('file-upload');
        return (React.createElement("div", { id: id, className: classNames.join(' '), onDragOver: this.dragEnter, onDragEnter: this.dragEnter, onDragLeave: this.dragLeave, onDragEnd: this.dragLeave, onDrop: this.drop, onClick: this.click, "data-dragging": this.state.dragging, "data-uploading": this.state.uploading },
            React.createElement("input", { type: "file", onChange: this.select, value: value, onClick: this.clickStop, multiple: true, ref: this.fileInput }),
            text || 'Click or Drag and Drop to upload'));
    }
}
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map