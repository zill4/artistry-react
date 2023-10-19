export default class ClassNames {
    parts: {
        [index: string]: string;
    };
    constructor(...names: string[]);
    add(...names: string[]): void;
    remove(...names: string[]): void;
    addTest(name: string | string[], show: boolean): void;
    toString(): string;
    static test(name: string | string[], show: boolean): any;
    static classListAdd(element: HTMLElement, className: string): void;
    static classListRemove(element: HTMLElement, className: string): void;
}
