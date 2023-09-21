import * as React from 'react';
export interface ICarouselViewProps {
}
export interface ICarouselViewState {
    activeIndex: number;
}
export default class CarouselView extends React.Component<ICarouselViewProps, any> {
    constructor(props?: ICarouselViewProps);
    nextCarouselSlide: () => void;
    backCarouselSlide: () => void;
    render(): JSX.Element;
}
