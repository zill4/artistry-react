import * as React from 'react';
export declare enum RoundingType {
    None = 0,
    Round = 1,
    Floor = 2,
    Ceiling = 3
}
export interface IAmountInputProps {
    id?: string;
    className?: string;
    value?: number;
    minimum?: number;
    maximum?: number;
    onChange?: (value: number, event: React.FormEvent<any>) => void | boolean;
    onIncrement?: (value: number, event: React.MouseEvent<any>) => void | boolean;
    onDecrement?: (value: number, event: React.MouseEvent<any>) => void | boolean;
    incrementText?: string;
    decrementText?: string;
    incrementIcon?: string;
    decrementIcon?: string;
    defaultValue?: number;
    showReset?: boolean;
    hideIncrementIcon?: boolean;
    hideDecrementIcon?: boolean;
    disabled?: boolean;
    disableDecrement?: boolean;
    disableIncrement?: boolean;
    disableInput?: boolean;
    right?: boolean;
    fill?: boolean;
    round?: RoundingType;
    nonZero?: boolean;
    nonNegative?: boolean;
}
export interface IAmountInputState {
    value?: number;
}
export default class AmountInput extends React.Component<IAmountInputProps, IAmountInputState> {
    constructor(props?: IAmountInputProps);
    change: (event: React.FormEvent<any>) => void;
    increment: (event: React.MouseEvent<any>) => void;
    decrement: (event: React.MouseEvent<any>) => void;
    reset: (event: React.MouseEvent<any>) => void;
    componentWillReceiveProps(props: IAmountInputProps): void;
    render(): React.JSX.Element;
}
