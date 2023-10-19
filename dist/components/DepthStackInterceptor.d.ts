import * as React from 'react';
export interface IDepthStackInterceptorProps {
    children?: React.ReactNode;
}
export default class DepthStackInterceptor extends React.Component<IDepthStackInterceptorProps, any> {
    rootRef: React.RefObject<HTMLDivElement>;
    handleClick: (event: MouseEvent) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
