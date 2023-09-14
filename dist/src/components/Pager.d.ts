import * as React from 'react';
export interface IPagerProps {
    className?: string;
    id?: string;
    index: number;
    count: number;
    showCount: number;
    showArrows?: boolean;
    showEnds?: boolean;
    zeroIndexed?: boolean;
    onClickIndex: (index: number, event: React.MouseEvent<HTMLElement>) => void;
    onClickEnd?: (event: React.MouseEvent<HTMLElement>) => void;
}
export default class Pager extends React.Component<IPagerProps, any> {
    onClickIndex(index: number, event: React.MouseEvent<HTMLElement>): void;
    onClickBack: (event: React.MouseEvent<HTMLElement>) => void;
    onClickForward: (event: React.MouseEvent<HTMLElement>) => void;
    onClickStart: (event: React.MouseEvent<HTMLElement>) => void;
    onClickEnd: (event: React.MouseEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
