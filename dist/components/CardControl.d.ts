import * as React from 'react';
export interface ICardControlProps {
    id?: string;
    className?: string;
    title?: string;
    label?: boolean;
    width?: number | string;
    stacked?: boolean;
    children?: React.ReactNode;
}
export default class CardControl extends React.Component<ICardControlProps, any> {
    render(): JSX.Element;
}
