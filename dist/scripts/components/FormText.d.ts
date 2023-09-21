import * as React from 'react';
import { AlignType } from '../util/Align';
export type FormTextTheme = 'default' | 'success' | 'info' | 'warning' | 'danger';
export interface IFormTextProps {
    className?: string;
    id?: string;
    fill?: boolean;
    theme?: FormTextTheme;
    align?: AlignType;
    children?: React.ReactNode;
}
export default class FormText extends React.Component<IFormTextProps, any> {
    render(): React.JSX.Element;
}
