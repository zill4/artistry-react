import * as React from 'react';
export interface IButtonBarProps {
    className?: string;
    id?: string;
}
export default class ButtonBar extends React.Component<IButtonBarProps, any> {
    render(): JSX.Element;
}
