import * as React from 'react';
export type NotificationLocation = 'default' | 'top' | 'right' | 'bottom' | 'left' | 'center-horizontal' | 'center-vertical' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
export interface INotificationContainerProps {
    id?: string;
    className?: string;
    location?: NotificationLocation;
    children?: React.ReactNode;
}
export default class NotificationContainer extends React.Component<INotificationContainerProps, any> {
    element: HTMLDivElement;
    constructor(props: INotificationContainerProps, context: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
