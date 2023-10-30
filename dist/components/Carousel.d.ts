import * as React from 'react';
import { ScrollableType } from './Scrollable';
export interface ICarouselProps {
    className?: string;
    id?: string;
    activeIndex: number;
    animation?: 'slide' | 'slide-fade' | 'fade' | 'flip';
    safe?: boolean;
    staticHeight?: boolean;
    fillHeight?: boolean;
    scroll?: ScrollableType;
    space?: boolean;
    children?: React.ReactNode;
}
export interface ICarouselState {
    height?: string;
    activeIndex?: number;
    previousActiveIndex?: number;
    animating?: boolean;
    selected?: boolean;
}
export default class Carousel extends React.Component<ICarouselProps, ICarouselState> {
    container: React.RefObject<HTMLDivElement>;
    state: ICarouselState;
    running: boolean;
    runCount: number;
    transitionCount: number;
    transitionEnd: (event: React.TransitionEvent<HTMLElement>) => Promise<void>;
    componentWillReceiveProps(nextProps?: ICarouselProps): Promise<void>;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
