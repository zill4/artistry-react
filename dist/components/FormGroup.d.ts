import * as React from 'react';
import { AlignType } from '../util/Align';
import { FormTextTheme } from './FormText';
export interface IFormGroupProps {
    className?: string;
    id?: string;
    label?: any;
    text?: any;
    textAlign?: AlignType;
    theme?: FormTextTheme;
    nonLabel?: boolean;
    inline?: boolean;
    stacked?: boolean;
    children?: React.ReactNode;
}
export default class FormGroup extends React.Component<IFormGroupProps, any> {
    render(): JSX.Element;
}
