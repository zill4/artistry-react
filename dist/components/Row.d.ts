import * as React from 'react';
export interface IRowProps {
    className?: string;
    id?: string;
    reverse?: boolean;
}
export default class Row extends React.Component<IRowProps, any> {
    render(): JSX.Element;
}
