import * as React from 'react';
export interface IFormViewProps {
}
export interface IFormViewState {
    date?: Date;
    amount: number;
}
export default class FormView extends React.Component<IFormViewProps, any> {
    state: IFormViewState;
    render(): JSX.Element;
}
