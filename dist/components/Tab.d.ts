import * as React from 'react';
import { ScrollableType } from './Scrollable';
export interface ITabProps {
    className?: string;
    id?: string;
    titles: any[];
    activeIndex?: number;
    onSelectPanel?: (index: any) => void;
    animated?: boolean;
    fade?: boolean;
    safe?: boolean;
    space?: boolean;
    staticHeight?: boolean;
    fillHeight?: boolean;
    scroll?: ScrollableType;
    children?: React.ReactNode;
}
export interface ITabState {
    activeIndex: number;
}
export default class Tab extends React.Component<ITabProps, ITabState> {
    constructor(props?: ITabProps);
    selectPanel(index: number): void;
    render(): JSX.Element;
}
