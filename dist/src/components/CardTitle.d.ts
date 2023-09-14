import * as React from 'react';
export interface ICardTitleProps {
    id?: string;
    className?: string;
}
export default class CardTitle extends React.Component<ICardTitleProps, any> {
    render(): JSX.Element;
}
