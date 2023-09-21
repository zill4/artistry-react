import * as React from 'react';
import { IGridExternalProps } from './Grid';
import { IScrollableExternalProps } from './Scrollable';
export type ModalSize = 'none' | 'all' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export interface IModalProps extends IGridExternalProps, IScrollableExternalProps {
    className?: string;
    id?: string;
    open: boolean;
    onClose?: (event: React.MouseEvent<HTMLElement>) => void;
    onConfirm?: (event: React.MouseEvent<HTMLElement>) => void;
    closeable?: boolean;
    closeButton?: any;
    title?: any;
    header?: any;
    footer?: any;
    animation?: 'center' | 'top' | 'right' | 'bottom' | 'left';
    lockable?: boolean;
    locked?: boolean;
    space?: boolean;
    background?: boolean;
    screenSize?: ModalSize | ModalSize[];
    children?: React.ReactNode;
}
export interface IModalState {
    open?: boolean;
    remove?: boolean;
}
export default class Modal extends React.Component<IModalProps, IModalState> {
    element: HTMLDivElement;
    runCount: number;
    constructor(props: IModalProps);
    preventClick(event: React.MouseEvent<HTMLElement>): void;
    close: (event: React.MouseEvent<HTMLElement>) => false | void;
    confirm: (event: React.MouseEvent<HTMLElement>) => false | void;
    transitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => Promise<void>;
    onScroll: (event: React.UIEvent<HTMLElement>) => void;
    componentDidUpdate(prevProps?: IModalProps): Promise<void>;
    updateModalRoot(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
