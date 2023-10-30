import * as React from 'react';
import { ITemplate } from './ITemplate';
export type SearchSize = 'default' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export interface ISearchProps {
    id?: string;
    className?: string;
    value?: string;
    buttonText?: any;
    options?: string[];
    altActionText?: string;
    showOptions?: boolean;
    fill?: boolean;
    disabled?: boolean;
    disabledButton?: boolean;
    disabledInput?: boolean;
    screenSize?: SearchSize;
    showClear?: boolean;
    clearText?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    onSelectOption?: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>, value: string) => any;
    onSearch?: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>, value: string) => any;
    onClear?: (event: React.MouseEvent<HTMLButtonElement>) => any;
    onClose?: (event: React.SyntheticEvent<HTMLElement>) => any;
    altAction?: (option: string) => any;
    type?: 'button' | 'submit' | 'reset';
    theme?: 'default' | 'primary' | 'danger';
    displaySize?: 'default' | 'small' | 'large';
    display?: 'default' | 'textonly' | 'outline';
    tooltip?: string;
    tooltipDirection?: 'top' | 'right' | 'bottom' | 'left';
    tooltipOpen?: boolean;
    popover?: ITemplate;
    popoverDirection?: 'top' | 'right' | 'bottom' | 'left';
    popoverAlign?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    popoverMenu?: boolean;
    popoverOpen?: boolean;
    popoverFill?: boolean;
    lockContent?: any;
    locked?: boolean;
    down?: boolean;
    link?: boolean;
    noTrigger?: boolean;
    noWrap?: boolean;
    noFocus?: boolean;
    onPopoverClose?: (event: React.SyntheticEvent) => boolean | void;
}
export interface ISearchState {
    activeOption?: number;
    value?: string;
    options?: string[];
}
export default class Search extends React.Component<ISearchProps, ISearchState> {
    private closeHandle;
    constructor(props: ISearchProps, context: any);
    cleanOptions(options: string[], value: string): string[];
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>) => void;
    onSelectOption(option: string, index: number, event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>): void;
    onClear: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: React.SyntheticEvent<HTMLElement>) => void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ISearchProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
