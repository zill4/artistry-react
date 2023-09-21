"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ArtistryReact_1 = require("modules/ArtistryReact");
class NotificationView extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: {}
        };
        this.pushDefault = () => {
            this.pushItem({
                type: 'default',
                title: 'Default',
                text: 'This is a default message.',
                decay: 2000,
                onClick: () => console.log('Default clicked!')
            });
        };
        this.pushSuccess = () => {
            this.pushItem({
                type: 'success',
                title: 'Success',
                text: 'This is a success message.',
                decay: 2000
            });
        };
        this.pushInfo = () => {
            this.pushItem({
                type: 'info',
                title: 'Info',
                text: 'This is a info message.',
                decay: 2000
            });
        };
        this.pushWarning = () => {
            this.pushItem({
                type: 'warning',
                title: 'Warning',
                text: 'This is a warning message.',
                decay: 2000
            });
        };
        this.pushDanger = () => {
            this.pushItem({
                type: 'danger',
                title: 'Danger',
                text: 'This is a danger message.',
                decay: 2000
            });
        };
    }
    pushItem(item) {
        this.state.items[NotificationView.currentKey] = item;
        NotificationView.currentKey++;
        this.forceUpdate();
    }
    render() {
        return (React.createElement(ArtistryReact_1.Section, { header: "Notification", headerSpace: true },
            React.createElement(ArtistryReact_1.ActionBar, { align: "start" },
                React.createElement(ArtistryReact_1.Button, { onClick: this.pushDefault }, "Push Default"),
                React.createElement(ArtistryReact_1.Button, { onClick: this.pushSuccess }, "Push Success"),
                React.createElement(ArtistryReact_1.Button, { onClick: this.pushInfo }, "Push Info"),
                React.createElement(ArtistryReact_1.Button, { onClick: this.pushWarning }, "Push Warning"),
                React.createElement(ArtistryReact_1.Button, { onClick: this.pushDanger }, "Push Danger")),
            React.createElement(ArtistryReact_1.NotificationContainer, null, Object.keys(this.state.items).map(key => {
                let item = this.state.items[key];
                return (React.createElement(ArtistryReact_1.Notification, { key: key, title: item.title, type: item.type, decay: item.decay, onClick: item.onClick, clickable: !!item.onClick, allowDelay: true, onClose: () => {
                        delete this.state.items[key];
                        this.forceUpdate();
                    } }, item.text));
            }))));
    }
}
exports.default = NotificationView;
NotificationView.currentKey = 0;
//# sourceMappingURL=NotificationView.js.map