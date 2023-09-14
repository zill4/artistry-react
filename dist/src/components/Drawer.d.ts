import * as React from 'react';
import { IGridExternalProps } from './Grid';
import { IScrollableExternalProps } from './Scrollable';
export interface IDrawerProps extends IGridExternalProps, IScrollableExternalProps {
    className?: string;
    id?: string;
    direction?: 'top' | 'right' | 'bottom' | 'left';
    open: boolean;
    full?: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
    background?: boolean;
    space?: boolean;
}
export interface IDrawerState {
    open?: boolean;
    remove?: boolean;
}
export default class Drawer extends React.Component<IDrawerProps, IDrawerState> {
    element: HTMLDivElement;
    runCount: number;
    constructor(props: IDrawerProps);
    preventClick(event: React.MouseEvent<HTMLDivElement>): void;
    close: (event: React.MouseEvent<HTMLDivElement>) => void;
    transitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => Promise<void>;
    onScroll: (event: React.UIEvent<HTMLElement>) => void;
    componentDidUpdate(prevProps?: IDrawerProps): Promise<void>;
    updateModalRoot(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
