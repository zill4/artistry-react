import * as React from 'react';
import Mask, { ISelection, IMaskUpdate } from '../util/Mask';
export interface IMaskedInputProps<T> extends React.HTMLProps<HTMLInputElement> {
    id?: string;
    className?: string;
    mask: string;
    value?: any;
    fill?: boolean;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => (void | boolean);
}
export default class MaskedInput<T> extends React.Component<IMaskedInputProps<T>, any> {
    inputRef: React.RefObject<HTMLInputElement>;
    command: boolean;
    mask: Mask;
    value?: string;
    selectionStart?: number;
    selectionEnd?: number;
    constructor(props: IMaskedInputProps<T>, context?: any);
    componentDidMount(): void;
    updateElement(maskUpdate: IMaskUpdate): void;
    componentWillReceiveProps(nextProps: IMaskedInputProps<T>): void;
    onFocus: (event?: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    onClick: (event?: React.MouseEvent<HTMLInputElement>) => void;
    onSelect: (event?: React.MouseEvent<HTMLInputElement>) => void;
    onChange: (event?: React.FormEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    getSelection(): ISelection;
    rollback(): void;
    render(): React.JSX.Element;
}
