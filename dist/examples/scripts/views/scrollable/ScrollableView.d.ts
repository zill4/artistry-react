import * as React from 'react';
export interface IScrollableViewProps {
}
export default class ScrollableView extends React.Component<IScrollableViewProps> {
    bottom: () => Promise<void>;
    render(): JSX.Element;
}
