import * as React from 'react';
export interface IRangeProps extends React.HTMLProps<HTMLInputElement> {
}
export default class Range extends React.Component<IRangeProps, any> {
    render(): JSX.Element;
}
