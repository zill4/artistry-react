import * as React from 'react';
export interface ICardSectionProps {
    id?: string;
    className?: string;
    multiColumn?: boolean;
    centered?: boolean;
    children?: React.ReactNode;
}
export default class CardSection extends React.Component<ICardSectionProps, any> {
    render(): React.JSX.Element;
}
