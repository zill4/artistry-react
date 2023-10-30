import * as React from 'react';
import { IGridExternalProps } from './Grid';
export interface ISectionProps extends React.HTMLProps<HTMLElement>, IGridExternalProps {
    header: any;
    footer?: any;
    lockable?: boolean;
    locked?: boolean;
    closeable?: boolean;
    closed?: boolean;
    space?: boolean;
    headerSpace?: boolean;
    footerSpace?: boolean;
    relative?: boolean;
    grid?: boolean;
    onClose?: (closed: boolean) => void;
}
export interface ISectionState {
    closed?: boolean;
    running?: boolean;
    animating?: boolean;
    height?: string;
}
export default class Section extends React.Component<ISectionProps, ISectionState> {
    root: React.RefObject<HTMLElement>;
    header: React.RefObject<HTMLElement>;
    content: React.RefObject<HTMLDivElement>;
    state: ISectionState;
    runCount: number;
    close: () => void;
    transitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => Promise<void>;
    componentWillReceiveProps(nextProps: ISectionProps): Promise<void>;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
