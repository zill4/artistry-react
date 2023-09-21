import * as React from 'react';
export interface ICardNavigationProps {
    id?: string;
    className?: string;
    align?: 'start' | 'end';
    children?: React.ReactNode;
}
export default class CardNavigation extends React.Component<ICardNavigationProps, any> {
    render(): React.JSX.Element;
}
