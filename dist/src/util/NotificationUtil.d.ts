import BaseEventTarget from './BaseEventTarget';
export declare type NotificationType = 'default' | 'success' | 'info' | 'warning' | 'danger';
export interface INotification {
    type?: NotificationType;
    title?: string;
    decay?: number;
}
export interface INotificationEvents {
    push: INotification[];
    update: INotification[];
    remove: INotification[];
}
export default class NotificationUtil extends BaseEventTarget<INotificationEvents> {
    notifications: INotification[];
    push(notification: INotification): void;
    remove(notification: INotification): void;
}
