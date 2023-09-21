import * as React from 'react';
export interface IButtonBarProps {
    className?: string;
    id?: string;
    children?: React.ReactNode;
}
export default class ButtonBar extends React.Component<IButtonBarProps, any> {
    render(): React.JSX.Element;
}
