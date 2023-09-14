"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBarItem = void 0;
const React = require("react");
const ClassNames_1 = require("../util/ClassNames");
class ActionBarBreadcrumb extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.state = {};
    }
    componentDidMount() {
        let breadcrumbHeader = this.ref.current;
        this.setState({
            observer: new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('action-bar-breadcrumb-item-hidden')) {
                            entry.target.classList.remove('action-bar-breadcrumb-item-hidden');
                        }
                    }
                    else {
                        if (!entry.target.classList.contains('action-bar-breadcrumb-item-hidden')) {
                            entry.target.classList.add('action-bar-breadcrumb-item-hidden');
                        }
                    }
                });
                let hiddenCount = 0;
                breadcrumbHeader.childNodes.forEach(child => {
                    if (child instanceof Element) {
                        if (child.classList.contains('action-bar-breadcrumb-item-hidden')) {
                            hiddenCount++;
                        }
                    }
                });
                if (hiddenCount > 0) {
                    breadcrumbHeader.setAttribute('data-align', 'end');
                }
                else {
                    breadcrumbHeader.removeAttribute('data-align');
                }
            }, {
                root: breadcrumbHeader,
                rootMargin: '0px',
                threshold: 1
            })
        });
        breadcrumbHeader.childNodes.forEach(child => {
            if (child instanceof Element) {
                this.state.observer.observe(child);
            }
        });
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
        this.state.observer.disconnect();
    }
    render() {
        let { id, className, } = this.props;
        let classNames = new ClassNames_1.default(className, 'action-bar', 'action-bar-breadcrumb');
        return (React.createElement("div", { ref: this.ref, className: classNames.toString(), id: id }, this.state.observer ?
            React.Children.map(this.props.children, (child, index) => {
                return (React.createElement(ActionBarItem, { key: index, observer: this.state.observer }, child));
            }) :
            undefined));
    }
}
exports.default = ActionBarBreadcrumb;
class ActionBarItem extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.state = {
            hidden: false
        };
    }
    componentDidMount() {
        this.props.observer.observe(this.ref.current);
    }
    componentWillUnmount() {
        this.props.observer.unobserve(this.ref.current);
    }
    render() {
        return (React.createElement("div", { ref: this.ref }, this.props.children));
    }
}
exports.ActionBarItem = ActionBarItem;
//# sourceMappingURL=ActionBarBreadcrumb.js.map