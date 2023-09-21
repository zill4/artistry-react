import * as React from 'react';
export interface ICalendarProps {
    date?: Date;
    onSelect?: (date: Date) => any;
}
export interface ICalendarState {
    month: number;
    year: number;
    date: Date;
}
export default class Calendar extends React.Component<ICalendarProps, any> {
    constructor(props?: ICalendarProps);
    increaseMonth: () => void;
    decreaseMonth: () => void;
    increaseYear: () => void;
    decreaseYear: () => void;
    selectDay: (day: any) => void;
    getDays(year: number, month: number): Date[];
    getWeeks(year: number, month: number): Date[][];
    componentWillReceiveProps(nextProps: ICalendarProps): void;
    render(): React.JSX.Element;
}
