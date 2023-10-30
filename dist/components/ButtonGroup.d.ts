import * as React from 'react';
export interface IButtonGroupProps {
    className?: string;
    id?: string;
    fill?: boolean;
    children?: React.ReactNode;
}
export default class ButtonGroups extends React.Component<IButtonGroupProps, any> {
    render(): JSX.Element;
}
