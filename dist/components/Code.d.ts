import * as React from 'react';
export interface ICodeProps extends React.HTMLProps<HTMLElement> {
}
export default class Code extends React.Component<ICodeProps, any> {
    render(): React.JSX.Element;
}
