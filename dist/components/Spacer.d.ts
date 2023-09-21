import * as React from 'react';
export interface ISpacerProps {
    className?: string;
    id?: string;
    list?: boolean;
}
export default class Spacer extends React.Component<ISpacerProps, any> {
    render(): React.JSX.Element;
}
