import * as React from 'react';
import { IGridExternalProps } from './Grid';
import { IDisableable } from '../abilities/Disabled';
export type CardType = 'default' | 'success' | 'info' | 'warning' | 'danger';
export type CardHandle = 'default' | 'top' | 'right' | 'bottom' | 'left';
export interface ICardProps extends IGridExternalProps, IDisableable {
    id?: string;
    className?: string;
    header?: any;
    footer?: any;
    space?: boolean;
    fill?: boolean;
    nav?: any;
    type?: CardType;
    handle?: CardHandle;
    square?: boolean;
    clickable?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => any;
    children?: React.ReactNode;
}
export default class Card extends React.Component<ICardProps, any> {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
