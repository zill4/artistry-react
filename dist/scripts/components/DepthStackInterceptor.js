"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DepthStack_1 = require("../util/DepthStack");
class DepthStackInterceptor extends React.Component {
    constructor() {
        super(...arguments);
        this.rootRef = React.createRef();
        this.handleClick = (event) => {
            let root = this.rootRef.current;
            if (root) {
                root.dispatchEvent(event);
            }
        };
        this.handleKeyDown = (event) => {
            let root = this.rootRef.current;
            if (root) {
                root.dispatchEvent(event);
            }
        };
        this.onClick = (event) => {
            DepthStack_1.default.close(event);
        };
        this.onKeyDown = (event) => {
            DepthStack_1.default.close(event);
        };
    }
    componentDidMount() {
        window.addEventListener('click', this.handleClick);
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        return (React.createElement("div", { ref: this.rootRef, onClick: this.onClick, onKeyDown: this.onKeyDown }, this.props.children));
    }
}
exports.default = DepthStackInterceptor;
//# sourceMappingURL=DepthStackInterceptor.js.map