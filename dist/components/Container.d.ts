import * as React from 'react';
export type ContainerSize = 'none' | 'all' | 'small' | 'medium' | 'large' | 'x-large';
export interface IContainerProps {
    className?: string;
    id?: string;
    menuBarTop?: boolean;
    screenSize?: ContainerSize | ContainerSize[];
    children?: React.ReactNode;
}
export default class Container extends React.Component<IContainerProps, any> {
    render(): JSX.Element;
}
