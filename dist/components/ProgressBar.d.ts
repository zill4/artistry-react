import * as React from 'react';
export type ProgressBarType = 'default' | 'success' | 'info' | 'warning' | 'danger';
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
    children?: React.ReactNode;
}
export default class ProgressBar extends React.Component<IProgressBarProps, any> {
    render(): React.JSX.Element;
}
