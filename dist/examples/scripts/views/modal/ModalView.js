"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class ModalView extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = () => {
            this.setState({ modalOpen: true });
        };
        this.closeModal = () => {
            this.setState({ modalOpen: false });
            console.log('close');
        };
        this.confirmModal = () => {
            this.setState({ modalOpen: false });
            console.log('confirm');
        };
        this.openInnerModal = () => {
            this.setState({ innerModalOpen: true });
        };
        this.closeInnerModal = () => {
            this.setState({ innerModalOpen: false });
        };
        this.lockModal = () => {
            this.setState({ modalLock: true });
            window.setTimeout(() => {
                this.setState({ modalLock: false });
            }, 1000);
        };
        this.state = {
            modalOpen: false,
            modalLock: false,
            innerModalOpen: false
        };
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Modal", space: true, headerSpace: true },
            React.createElement(ArtistryReact_1.Button, { onClick: this.openModal }, "Open Modal"),
            React.createElement(ArtistryReact_1.Modal, { open: this.state.modalOpen, onClose: this.closeModal, onConfirm: this.confirmModal, title: "Modal", animation: "top", screenSize: "small", lockable: true, locked: this.state.modalLock, closeable: true, space: true },
                React.createElement("div", null, "test"),
                React.createElement(ArtistryReact_1.ButtonBar, null,
                    React.createElement(ArtistryReact_1.Button, { onClick: this.openInnerModal }, "Open Inner Modal"),
                    React.createElement(ArtistryReact_1.Button, { onClick: this.lockModal }, "Lock Modal")),
                React.createElement(ArtistryReact_1.Modal, { open: this.state.innerModalOpen, onClose: this.closeInnerModal, title: "Inner Modal", animation: "center", closeable: true },
                    React.createElement("div", null, "inner test")))));
    }
}
exports.default = ModalView;
//# sourceMappingURL=ModalView.js.map