import * as React from 'react';
export interface IMenuBarViewProps {
}
export interface IMenuBarViewState {
    userMenuOpen: boolean;
}
export default class MenuBarView extends React.Component<IMenuBarViewProps, IMenuBarViewState> {
    constructor(props?: IMenuBarViewProps);
    toggleUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    closeUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
