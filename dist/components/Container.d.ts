import * as React from 'react';
export declare type ContainerSize = 'none' | 'all' | 'small' | 'medium' | 'large' | 'x-large';
export interface IContainerProps {
    className?: string;
    id?: string;
    menuBarTop?: boolean;
    screenSize?: ContainerSize | ContainerSize[];
}
export default class Container extends React.Component<IContainerProps, any> {
    render(): JSX.Element;
}
