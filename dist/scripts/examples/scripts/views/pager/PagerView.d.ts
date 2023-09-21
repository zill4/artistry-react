import * as React from 'react';
export interface IPagerViewProps {
}
export interface IPagerViewState {
    index: number;
}
export default class PagerView extends React.Component<IPagerViewProps, any> {
    count: number;
    constructor(props?: IPagerViewProps);
    onClickIndex: (index: number, event: React.MouseEvent<HTMLElement>) => void;
    onClickBack: (event: React.MouseEvent<HTMLElement>) => void;
    onClickForward: (event: React.MouseEvent<HTMLElement>) => void;
    onClickStart: (event: React.MouseEvent<HTMLElement>) => void;
    onClickEnd: (event: React.MouseEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
