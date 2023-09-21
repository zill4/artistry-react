import * as React from 'react';
import { ICarouselProps } from './Carousel';
export interface ICardCarouselProps extends ICarouselProps {
    minWidth?: number;
    maxWidth?: number;
    cardSpacing?: number;
    carouselSpacing?: number;
    onChangeSize?: (index: number, slideSize?: number, oldSlideSize?: number) => any;
    children?: React.ReactNode;
}
export interface ICardCarouselState {
    rendered?: boolean;
    slideSize?: number;
}
export default class CardCarousel extends React.Component<ICardCarouselProps, ICardCarouselState> {
    element: React.RefObject<HTMLDivElement>;
    state: ICardCarouselState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onChangeSize: (slideSize: number, oldSlideSize: number) => void;
    resizeHandler: () => void;
    componentDidUpdate(): void;
    render(): React.JSX.Element;
}
