import * as React from 'react';
export interface ISectionViewProps {
}
export interface ISectionViewState {
    locked: boolean;
    closed: boolean;
}
export default class SectionView extends React.Component<ISectionViewProps, ISectionViewState> {
    constructor(props?: ISectionViewProps);
    close: () => void;
    lockContents: () => void;
    render(): JSX.Element;
}
