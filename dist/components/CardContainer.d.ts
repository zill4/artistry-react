import * as React from 'react';
export interface ICardContainerProps {
    id?: string;
    className?: string;
    space?: boolean;
    minWidth?: number | string;
    maxWidth?: number | string;
}
export default class CardContainer extends React.Component<ICardContainerProps, any> {
    render(): JSX.Element;
}
