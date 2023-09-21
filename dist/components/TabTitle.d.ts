import * as React from 'react';
export interface ITabTitleProps {
    className?: string;
    id?: string;
    title: any;
    active?: boolean;
    onSelectPanel?: (event: React.MouseEvent<HTMLElement>) => boolean | void;
}
export default class TabTitle extends React.Component<ITabTitleProps, any> {
    selectPanel: (event: React.MouseEvent<HTMLElement>) => boolean | void;
    render(): React.JSX.Element;
}
