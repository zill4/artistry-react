import * as React from 'react';
export interface IDividerProps {
    className?: string;
    id?: string;
    children?: React.ReactNode;
}
export default class Divider extends React.Component<IDividerProps, any> {
    render(): React.JSX.Element;
}
