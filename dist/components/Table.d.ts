import * as React from 'react';
export interface IColumn<T> {
    property?: keyof T;
    header?: string | (() => any);
    footer?: string | (() => any);
    template?: (item: T, index?: number) => any;
    hidden?: boolean;
    action?: boolean;
}
export interface ITableProps<T> {
    className?: string;
    id?: string;
    data: T[];
    headers?: any[];
    footers?: any[];
    columns?: IColumn<T>[];
    template?: (item: T, index?: number) => any;
    templateTop?: any | (() => any);
    templateBottom?: any | (() => any);
    list?: boolean;
    striped?: boolean;
    hoverable?: boolean;
    form?: boolean;
}
export default class Table<T> extends React.Component<ITableProps<T>, any> {
    render(): JSX.Element;
}
