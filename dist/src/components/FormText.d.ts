import * as React from 'react';
import { AlignType } from '../util/Align';
export declare type FormTextTheme = 'default' | 'success' | 'info' | 'warning' | 'danger';
export interface IFormTextProps {
    className?: string;
    id?: string;
    fill?: boolean;
    theme?: FormTextTheme;
    align?: AlignType;
}
export default class FormText extends React.Component<IFormTextProps, any> {
    render(): JSX.Element;
}
