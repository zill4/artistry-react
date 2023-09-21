import * as React from 'react';
export type GridSize = 'default' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export interface IGridProps {
    className?: string;
    id?: string;
    columns?: number;
    screenSize?: GridSize;
    fillWidth?: boolean;
    space?: boolean;
    children?: React.ReactNode;
}
export default class Grid extends React.Component<IGridProps, any> {
    render(): React.JSX.Element;
}
export interface IGridExternalProps {
    grid?: boolean;
    gridColumns?: number;
    gridSize?: GridSize;
    gridSpace?: boolean;
}
export declare function gridConfig(classNames: string[], props: IGridExternalProps): void;
