import * as React from 'react';
export interface IButtonViewProps {
}
export interface IButtonViewState {
    locked: boolean;
    popoverOpen: boolean;
}
export default class ButtonView extends React.Component<IButtonViewProps, IButtonViewState> {
    constructor(props?: IButtonViewProps);
    lockButton: () => void;
    openPopover: () => void;
    closePopover: () => void;
    render(): JSX.Element;
}
