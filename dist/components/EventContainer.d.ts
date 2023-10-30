import * as React from 'react';
export interface IEventContainer {
    events: string | string[];
    preventDefault?: boolean;
    stopPropagation?: boolean;
    block?: boolean;
    children?: React.ReactNode;
}
export default class EventContainer extends React.Component<IEventContainer, any> {
    eventHandler: (event: React.SyntheticEvent) => void;
    eventsToHash(events: string | string[]): {};
    render(): JSX.Element;
}
