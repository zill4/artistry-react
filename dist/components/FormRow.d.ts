import * as React from 'react';
export type FormRowSize = 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'stacked';
export interface IFormRowProps {
    className?: string;
    id?: string;
    screenSize?: FormRowSize;
    children?: React.ReactNode;
}
export default class FormRow extends React.Component<IFormRowProps, any> {
    render(): JSX.Element;
}
