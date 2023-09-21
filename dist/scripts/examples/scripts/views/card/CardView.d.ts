import * as React from 'react';
export interface ICardViewProps {
}
export interface ICardViewState {
    closed?: boolean;
    filled?: boolean;
    index?: number;
}
export default class CardView extends React.Component<ICardViewProps, ICardViewState> {
    constructor(props?: ICardViewProps);
    toggleClosed: () => void;
    toggleFilled: () => void;
    clickNext: () => void;
    clickPrevious: () => void;
    render(): JSX.Element;
}
