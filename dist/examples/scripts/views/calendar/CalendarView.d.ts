import * as React from 'react';
export interface ICalendarViewProps {
}
export interface ICalendarViewState {
    date?: Date;
}
export default class CalendarView extends React.Component<ICalendarViewProps, any> {
    state: ICalendarViewState;
    render(): JSX.Element;
}
