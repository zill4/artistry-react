"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Carousel_1 = require("./Carousel");
const CardContainer_1 = require("./CardContainer");
class CardCarousel extends React.Component {
    constructor() {
        super(...arguments);
        this.element = React.createRef();
        this.state = {
            rendered: false,
            slideSize: 1
        };
        this.onChangeSize = (slideSize, oldSlideSize) => {
            if (this.props.onChangeSize) {
                let oldIndex = this.props.activeIndex;
                if (oldIndex < 0) {
                    let length = React.Children.count(this.props.children);
                    oldIndex = (oldIndex % length) + length;
                }
                let newIndex = Math.floor(oldIndex * oldSlideSize / slideSize);
                this.props.onChangeSize(newIndex, slideSize, oldSlideSize);
            }
        };
        this.resizeHandler = () => {
            let { minWidth, cardSpacing, carouselSpacing } = this.props;
            let slideSize = 1;
            let element = this.element.current;
            if (element) {
                minWidth = minWidth || 300;
                cardSpacing = cardSpacing || 10;
                carouselSpacing = carouselSpacing || 10;
                minWidth += cardSpacing;
                let width = element.clientWidth;
                if (width > minWidth + cardSpacing) {
                    let remainder = (width - cardSpacing) % minWidth;
                    slideSize = (width - cardSpacing - remainder) / minWidth;
                }
            }
            if (!this.state.rendered) {
                let oldSlideSize = this.state.slideSize;
                this.setState({
                    rendered: true,
                    slideSize: slideSize
                });
                this.onChangeSize(slideSize, oldSlideSize);
            }
            else if (slideSize !== this.state.slideSize) {
                let oldSlideSize = this.state.slideSize;
                this.setState({
                    slideSize: slideSize
                });
                this.onChangeSize(slideSize, oldSlideSize);
            }
        };
    }
    componentDidMount() {
        this.resizeHandler();
        window.addEventListener('resize', this.resizeHandler);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }
    componentDidUpdate() {
        this.resizeHandler();
    }
    render() {
        let _a = this.props, { id, className, minWidth, maxWidth, children } = _a, props = __rest(_a, ["id", "className", "minWidth", "maxWidth", "children"]);
        let classNames = className ? [className] : [];
        classNames.push('card-carousel');
        let wrappedChildren = [];
        let innerWrapper;
        React.Children.forEach(children, (child, index) => {
            if (index % this.state.slideSize === 0) {
                innerWrapper = [];
                wrappedChildren.push(innerWrapper);
            }
            innerWrapper.push(child);
        });
        return (React.createElement("div", { ref: this.element, id: id, className: classNames.join(' ') }, this.state.rendered ?
            React.createElement(Carousel_1.default, Object.assign({}, props), wrappedChildren.map((children, index) => {
                return (React.createElement(CardContainer_1.default, { className: "space", minWidth: minWidth, maxWidth: maxWidth, key: index }, children));
            })) :
            undefined));
    }
}
exports.default = CardCarousel;
//# sourceMappingURL=CardCarousel.js.map