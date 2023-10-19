import * as React from 'react';
export interface IToggleProps extends React.HTMLProps<HTMLInputElement> {
}
export default class Toggle extends React.Component<IToggleProps, any> {
    render(): React.JSX.Element;
}
