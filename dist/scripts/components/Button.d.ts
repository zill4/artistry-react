import * as React from 'react';
import { ITemplate } from './ITemplate';
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    id?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    theme?: 'default' | 'primary' | 'danger';
    displaySize?: 'default' | 'small' | 'large';
    display?: 'default' | 'textonly' | 'outline' | 'underline';
    fill?: boolean;
    tooltip?: string;
    tooltipDirection?: 'top' | 'right' | 'bottom' | 'left';
    tooltipOpen?: boolean;
    popover?: ITemplate;
    popoverDirection?: 'top' | 'right' | 'bottom' | 'left';
    popoverAlign?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    popoverMenu?: boolean;
    popoverOpen?: boolean;
    popoverFill?: boolean;
    popoverSpace?: boolean;
    onPopoverClose?: (event: React.SyntheticEvent) => boolean | void;
    lockContent?: any;
    locked?: boolean;
    down?: boolean;
    link?: boolean;
    noCaps?: boolean;
    noTrigger?: boolean;
    noWrap?: boolean;
    noFocus?: boolean;
}
export interface IButtonState {
    open?: boolean;
}
export default class Button extends React.Component<IButtonProps, any> {
    private closeHandle;
    constructor(props?: IButtonState);
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    close(event: React.SyntheticEvent): void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: IButtonProps): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
