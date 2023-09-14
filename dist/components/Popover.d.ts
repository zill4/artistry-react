import * as React from 'react';
export interface IPopoverProps {
    className?: string;
    id?: string;
    direction?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    fill?: boolean;
    open?: boolean;
    closed?: boolean;
    preventClick?: boolean;
    space?: boolean;
}
export default class Popover extends React.Component<IPopoverProps, any> {
    preventClick(event: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
