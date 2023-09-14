import * as React from 'react';
export interface IMenuBarProps {
    className?: string;
    id?: string;
    title?: any;
    top?: boolean;
    open?: boolean;
    onOpen?: (event: MouseEvent) => boolean | void;
}
export default class MenuBar extends React.Component<IMenuBarProps, any> {
    element: HTMLDivElement;
    constructor(props: IMenuBarProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onOpen(event: MouseEvent): void;
    render(): React.ReactPortal;
}
