import * as React from 'react';
export interface IIconProps {
    pack?: string;
    name: string;
}
export default class Icon extends React.Component<IIconProps, any> {
    render(): JSX.Element;
}
