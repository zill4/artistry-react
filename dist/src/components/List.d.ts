import * as React from 'react';
export interface IListProps<T> {
    id?: string;
    className?: string;
    data: T[];
    space?: boolean;
    active?: number;
    selected?: number[];
    template?: (item: T, index?: number) => any;
}
export default class List<T> extends React.Component<IListProps<T>, any> {
    render(): JSX.Element;
}
