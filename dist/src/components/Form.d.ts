import * as React from 'react';
export declare type FormSize = 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'stacked';
export interface IFormProps extends React.HTMLProps<HTMLFormElement> {
    screenSize?: FormSize;
    lockable?: boolean;
    locked?: boolean;
    nonForm?: boolean;
    onEnter?: (event: KeyboardEvent) => any;
    onEscape?: (event: KeyboardEvent) => any;
}
export default class Form extends React.Component<IFormProps, any> {
    onKeyDown(event: KeyboardEvent): void;
    render(): JSX.Element;
}
