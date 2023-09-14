import * as React from 'react';
export interface IDrawerViewProps {
}
export interface IDrawerViewState {
    drawerOpen: boolean;
}
export default class DrawerView extends React.Component<IDrawerViewProps, IDrawerViewState> {
    constructor(props?: IDrawerViewProps);
    openDrawer: () => void;
    closeDrawer: () => void;
    render(): JSX.Element;
}
