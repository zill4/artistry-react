"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Portal_1 = require("../util/Portal");
const ClassNames_1 = require("../util/ClassNames");
class NotificationContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.element = document.createElement('div');
    }
    componentDidMount() {
        let flyoutLayer = Portal_1.default.getElement('layer-flyout');
        if (!flyoutLayer.contains(this.element)) {
            flyoutLayer.appendChild(this.element);
        }
    }
    componentWillUnmount() {
        let flyoutLayer = Portal_1.default.getElement('layer-flyout');
        if (flyoutLayer.contains(this.element)) {
            flyoutLayer.removeChild(this.element);
        }
    }
    render() {
        let { id, className, location } = this.props;
        let classNames = new ClassNames_1.default(className);
        classNames.add('notification-container');
        if (!React.Children.count(this.props.children)) {
            classNames.add('hidden');
        }
        switch (location) {
            case 'top':
                classNames.add('notification-top');
                break;
            case 'right':
                classNames.add('notification-right');
                break;
            case 'bottom':
                classNames.add('notification-bottom');
                break;
            case 'left':
                classNames.add('notification-left');
                break;
            case 'center-horizontal':
                classNames.add('notification-center-horizontal');
                break;
            case 'center-vertical':
                classNames.add('notification-center-vertical');
                break;
            case 'top-right':
                classNames.add('notification-top-right');
                break;
            case 'bottom-right':
                classNames.add('notification-bottom-right');
                break;
            case 'bottom-left':
                classNames.add('notification-bottom-left');
                break;
            case 'top-left':
                classNames.add('notification-top-left');
                break;
        }
        return ReactDOM.createPortal((React.createElement("div", { className: classNames.toString(), id: id }, this.props.children)), this.element);
    }
}
exports.default = NotificationContainer;
//# sourceMappingURL=NotificationContainer.js.map