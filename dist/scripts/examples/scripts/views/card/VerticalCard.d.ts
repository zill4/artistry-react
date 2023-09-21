import * as React from 'react';
export interface IVerticalCardProps {
}
export interface IVerticalCardState {
    closed?: boolean;
}
export default class VerticalCard extends React.Component<IVerticalCardProps, IVerticalCardState> {
    image: string;
    constructor(props?: IVerticalCardProps);
    toggleClosed: () => void;
    render(): JSX.Element;
}
