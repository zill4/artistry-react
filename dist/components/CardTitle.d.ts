import * as React from 'react';
export interface ICardTitleProps {
    id?: string;
    className?: string;
    children?: React.ReactNode;
}
export default class CardTitle extends React.Component<ICardTitleProps, any> {
    render(): JSX.Element;
}
