import * as React from 'react';
import Calendar, { ICalendarProps } from './Calendar';
export { Calendar, ICalendarProps };
export interface IDatePickerProps {
    id?: string;
    className?: string;
    mask?: string;
    date: Date | string;
    fill?: boolean;
    onSelect: (date: Date) => void;
}
export default class DatePicker extends React.Component<IDatePickerProps, any> {
    onSelect: (date: Date) => void;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
