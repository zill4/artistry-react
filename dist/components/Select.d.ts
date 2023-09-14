import * as React from 'react';
export interface ISelectProps<T> {
    id?: string;
    className?: string;
    data: T[];
    template?: (value: T, index: number, data: T[]) => any;
    value?: string | number | string[];
    valueProp?: keyof T;
    displayProp?: keyof T;
    onChange?: (option: T, event?: React.ChangeEvent<HTMLSelectElement>) => any;
    allowEmpty?: boolean;
    emptyValue?: T | string | number | string[];
}
export default class Select<T, U> extends React.Component<ISelectProps<T>> {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    render(): JSX.Element;
}
