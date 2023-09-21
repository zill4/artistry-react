import * as React from 'react';
export interface ITimePickerProps {
    minuteInterval?: number;
    value: Date;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>, date: Date) => any;
    utc?: boolean;
}
export interface ITimePickerState {
}
export default class TimePicker extends React.Component<ITimePickerProps, ITimePickerState> {
    onChangeHour: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeMinute: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeMeridiem: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    render(): React.JSX.Element;
}
