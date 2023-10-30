import * as React from 'react';
export interface IMenuBarLinkProps {
    className?: string;
    id?: string;
    title?: any;
    href?: string;
    active?: boolean;
    noLink?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}
export default class MenuBarLink extends React.Component<IMenuBarLinkProps, any> {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
