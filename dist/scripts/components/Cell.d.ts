import * as React from 'react';
import { AlignType } from '../util/Align';
export interface ICellProps {
    className?: string;
    id?: string;
    columns?: number;
    offset?: number;
    align?: AlignType;
    width?: number | string;
    leftMargin?: number | string;
    children?: React.ReactNode;
}
export default class Cell extends React.Component<ICellProps, any> {
    render(): React.JSX.Element;
}
