"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Container extends React.Component {
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('container');
        if (this.props.menuBarTop) {
            classNames.push('container-menu-bar-top');
        }
        if (this.props.screenSize) {
            let sizes = (this.props.screenSize instanceof Array) ? this.props.screenSize : [this.props.screenSize];
            sizes.forEach(size => {
                switch (size) {
                    case 'all':
                        classNames.push('container-all');
                        break;
                    case 'small':
                        classNames.push('container-sm');
                        break;
                    case 'medium':
                        classNames.push('container-md');
                        break;
                    case 'large':
                        classNames.push('container-lg');
                        break;
                    case 'x-large':
                        classNames.push('container-xl');
                        break;
                }
            });
        }
        return React.createElement("div", { className: classNames.join(' '), id: this.props.id }, this.props.children);
    }
}
exports.default = Container;
//# sourceMappingURL=Container.js.map