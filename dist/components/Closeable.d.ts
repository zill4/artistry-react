import * as React from 'react';
export interface ICloseableProps {
    id?: string;
    className?: string;
    closed?: boolean;
}
export interface ICloseableState {
    closed?: boolean;
    running?: boolean;
    animating?: boolean;
    height?: string;
}
export default class Closeable extends React.Component<ICloseableProps, ICloseableState> {
    root: React.RefObject<HTMLDivElement>;
    state: ICloseableState;
    runCount: number;
    transitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => Promise<void>;
    componentWillReceiveProps(nextProps: ICloseableProps): Promise<void>;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
