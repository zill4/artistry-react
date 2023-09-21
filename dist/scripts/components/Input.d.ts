import * as React from 'react';
export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    fill?: boolean;
    mask?: string;
    displaySize?: 'default' | 'small' | 'large';
}
export default class Input extends React.Component<IInputProps, any> {
    render(): React.JSX.Element;
}
