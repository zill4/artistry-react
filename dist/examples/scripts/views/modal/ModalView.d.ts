import * as React from 'react';
export interface IModalViewProps {
}
export interface IModalViewState {
    modalOpen: boolean;
    modalLock: boolean;
    innerModalOpen: boolean;
}
export default class ModalView extends React.Component<IModalViewProps, IModalViewState> {
    constructor(props?: IModalViewProps);
    openModal: () => void;
    closeModal: () => void;
    confirmModal: () => void;
    openInnerModal: () => void;
    closeInnerModal: () => void;
    lockModal: () => void;
    render(): JSX.Element;
}
