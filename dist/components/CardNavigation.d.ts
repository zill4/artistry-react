import * as React from 'react';
export interface ICardNavigationProps {
    id?: string;
    className?: string;
    align?: 'start' | 'end';
}
export default class CardNavigation extends React.Component<ICardNavigationProps, any> {
    render(): JSX.Element;
}
