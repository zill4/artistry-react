import * as React from 'react';
import { AlignType } from '../util/Align';
export interface ICardRowProps {
    id?: string;
    className?: string;
    align?: AlignType;
    children?: React.ReactNode;
}
export default class CardRow extends React.Component<ICardRowProps, any> {
    render(): JSX.Element;
}
