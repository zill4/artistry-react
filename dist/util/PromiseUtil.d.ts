import * as React from 'react';
export declare function wait(time: number): Promise<unknown>;
export declare function waitAnimation(time?: number): Promise<unknown>;
export declare function setState<T>(state: T, thisArg: React.Component<any, T>): Promise<void>;
