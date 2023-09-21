import * as React from 'react';
export interface IRowProps {
    className?: string;
    id?: string;
    reverse?: boolean;
    children?: React.ReactNode;
}
export default class Row extends React.Component<IRowProps, any> {
    render(): React.JSX.Element;
}
