import * as React from 'react';
import { INotificationProps } from 'modules/ArtistryReact';
export interface INotificationViewProps {
}
export interface INotification extends INotificationProps {
    text?: string;
}
export interface INotificationViewState {
    items?: {
        [index: number]: INotification;
    };
}
export default class NotificationView extends React.Component<INotificationViewProps, any> {
    state: INotificationViewState;
    static currentKey: number;
    pushItem(item: INotification): void;
    pushDefault: () => void;
    pushSuccess: () => void;
    pushInfo: () => void;
    pushWarning: () => void;
    pushDanger: () => void;
    render(): JSX.Element;
}
