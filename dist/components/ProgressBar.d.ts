import * as React from 'react';
export declare type ProgressBarType = 'default' | 'success' | 'info' | 'warning' | 'danger';
export interface IProgressBarProps {
    id?: string;
    className?: string;
    value?: number;
    min?: number;
    max?: number;
    showPercentage?: boolean;
    decimal?: number;
    decimalFixed?: boolean;
    type?: ProgressBarType;
}
export default class ProgressBar extends React.Component<IProgressBarProps, any> {
    render(): JSX.Element;
}
