import * as React from 'react';
import { INotification } from '../util/NotificationUtil';
import { Animation } from '../abilities/Animatable';
export interface INotificationProps extends INotification {
    id?: string;
    className?: string;
    clickable?: boolean;
    animation?: Animation;
    allowDelay?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => any;
    onClose?: () => any;
    children?: React.ReactNode;
}
export interface INotificationState {
    hide?: boolean;
}
export default class Notification extends React.Component<INotificationProps, INotificationState> {
    decayCounter: number;
    state: INotificationState;
    constructor(props: INotificationProps, context: any);
    startDecay: () => Promise<void>;
    endDecay: (event: React.AnimationEvent) => Promise<void>;
    stopDecay: () => void;
    render(): JSX.Element;
}
