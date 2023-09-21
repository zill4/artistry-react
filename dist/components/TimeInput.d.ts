import * as React from 'react';
export interface ITimeInputProps extends React.HTMLProps<HTMLInputElement> {
    seconds?: boolean;
    value?: string;
    fill?: boolean;
}
export interface ITimeInputState {
}
export default class TimeInput extends React.Component<ITimeInputProps, ITimeInputState> {
    render(): React.JSX.Element;
}
