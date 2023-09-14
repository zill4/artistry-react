/// <reference types="react" />
export interface ICloseHandle {
    (event: React.SyntheticEvent): boolean | void;
}
export interface ICloseItem {
    close: ICloseHandle;
    confirm: ICloseHandle;
}
export default class DepthStack {
    static items: ICloseItem[];
    static push(close: ICloseHandle, confirm?: ICloseHandle): void;
    static remove(close: ICloseHandle): void;
    static close(event: React.SyntheticEvent): void;
    static confirm(event: React.SyntheticEvent): void;
    static init(): void;
    static blur(): void;
}
