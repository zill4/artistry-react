import * as React from 'react';
export interface IFillableProps {
    id?: string;
    className?: string;
    filled?: boolean;
    card?: boolean;
    children?: React.ReactNode;
}
export interface IFillableState {
    filled?: boolean;
    height?: string;
    width?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}
export default class Fillable extends React.Component<IFillableProps, IFillableState> {
    root: React.RefObject<HTMLDivElement>;
    state: IFillableState;
    runCount: number;
    constructor(props?: IFillableProps);
    componentWillReceiveProps(nextProps: IFillableState): Promise<void>;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
