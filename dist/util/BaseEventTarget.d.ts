export interface CustomEventListener<T = any> extends EventListener {
    (evt: CustomEvent<T>): void;
}
export interface CustomEventTarget<T = any> extends EventTarget {
    addEventListener<U extends keyof T>(type: U, callback: CustomEventListener<T[U]>): void;
    addEventListener<U extends keyof T>(type: U | string, callback: CustomEventListener<T[U]>): void;
    removeEventListener<U extends keyof T>(type: U, callback: CustomEventListener<T[U]>): void;
    removeEventListener<U extends keyof T>(type: U | string, callback: CustomEventListener<T[U]>): void;
    sendEvent<U extends keyof T>(type: U, detail?: T[U]): void;
    sendEvent<U extends keyof T>(type: U | string, detail?: T[U]): void;
}
export default class BaseEventTarget<T = any> implements EventTarget {
    listeners: {
        [index: string]: CustomEventListener[];
    };
    addEventListener(type: string, callback: CustomEventListener): void;
    addEventListener<U extends keyof T>(type: U, callback: CustomEventListener<T[U]>): void;
    removeEventListener(type: string, callback: CustomEventListener): void;
    removeEventListener<U extends keyof T>(type: U, callback: CustomEventListener<T[U]>): void;
    dispatchEvent(event: CustomEvent): boolean;
    sendEvent<U extends keyof T>(type: U, detail?: T[U]): void;
}
export interface DOMEvent<T extends Node = Node> extends Event {
    target: T;
}
