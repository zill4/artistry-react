"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class EventContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.eventHandler = (event) => {
            if (this.props.preventDefault) {
                event.preventDefault();
            }
            if (this.props.stopPropagation) {
                event.stopPropagation();
            }
        };
    }
    eventsToHash(events) {
        let hash = {};
        if (typeof events === 'string') {
            events = [events];
        }
        events.forEach(event => {
            hash[event] = this.eventHandler;
        });
        return hash;
    }
    render() {
        let { block, events } = this.props;
        if (block) {
            return (React.createElement("div", Object.assign({}, this.eventsToHash(events)), this.props.children));
        }
        else {
            return (React.createElement("span", Object.assign({}, this.eventsToHash(events)), this.props.children));
        }
    }
}
exports.default = EventContainer;
//# sourceMappingURL=EventContainer.js.map