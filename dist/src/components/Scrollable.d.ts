import * as React from 'react';
export declare type ScrollableType = 'auto' | 'both' | 'none' | 'x' | 'y' | 'xAlways' | 'yAlways' | 'xNever' | 'yNever';
export declare enum ScrollableTypeEnum {
    auto = "auto",
    both = "both",
    none = "none",
    x = "x",
    y = "y",
    xAlways = "x-always",
    yAlways = "y-always",
    xNever = "x-never",
    yNever = "y-never"
}
export interface IScrollableExternalProps {
    scrollType?: ScrollableType;
    bumper?: number;
    onScroll?: (event?: React.UIEvent<HTMLElement>) => any;
    onTopEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onTopExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
}
export interface IScrollableProps {
    id?: string;
    className?: string;
    type?: ScrollableType;
    height?: number | string;
    maxHeight?: number | string;
    bumper?: number | string;
    onScroll?: (event?: React.UIEvent<HTMLElement>) => any;
    onTopEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onTopExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
}
export default class Scrollable extends React.Component<IScrollableProps, any> {
    root: React.RefObject<HTMLDivElement>;
    topBumper: React.RefObject<HTMLDivElement>;
    rightBumper: React.RefObject<HTMLDivElement>;
    bottomBumper: React.RefObject<HTMLDivElement>;
    leftBumper: React.RefObject<HTMLDivElement>;
    rootObserver: IntersectionObserver;
    topIntersected: boolean;
    rightIntersected: boolean;
    bottomIntersected: boolean;
    leftIntersected: boolean;
    onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
