import * as React from 'react';
interface IActionBarItem {
    title: string;
    onClick?: () => any;
    link?: string;
}
export interface IActionBarBreadcrumbProps {
    className?: string;
    id?: string;
    items?: IActionBarItem[];
    children?: React.ReactNode;
}
export interface IActionBarBreadcrumbState {
    observer?: IntersectionObserver;
}
export default class ActionBarBreadcrumb extends React.Component<IActionBarBreadcrumbProps, IActionBarBreadcrumbState> {
    ref: React.RefObject<HTMLDivElement>;
    state: IActionBarBreadcrumbState;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export interface IActionBarItemProps {
    observer: IntersectionObserver;
    children?: React.ReactNode;
}
export interface IActionBarItemState {
    hidden?: boolean;
}
export declare class ActionBarItem extends React.Component<IActionBarItemProps, IActionBarItemState> {
    ref: React.RefObject<HTMLDivElement>;
    state: IActionBarItemState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
