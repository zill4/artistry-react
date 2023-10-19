import * as React from 'react';
import { ITemplate } from './ITemplate';
export interface IUserThumbnailProps {
    className?: string;
    id?: string;
    src?: string;
    size?: 'default' | 'small' | 'medium' | 'large';
    placeholder?: string;
    popover?: ITemplate;
    popoverDirection?: 'top' | 'right' | 'bottom' | 'left';
    popoverAlign?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    popoverSpace?: boolean;
    popoverOpen?: boolean;
    popoverMenu?: boolean;
    menuBarTop?: boolean;
    onPopoverClose?: (event: React.MouseEvent<HTMLElement>) => boolean | void;
    onClick?: (event: React.MouseEvent<HTMLElement>) => boolean | void;
}
export default class UserThumbnail extends React.Component<IUserThumbnailProps, any> {
    private closeHandle;
    close(event: React.MouseEvent<HTMLElement>): void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: IUserThumbnailProps): void;
    componentWillUnmount(): void;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    render(): React.JSX.Element;
}
