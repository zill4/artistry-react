export default class BodyScroll {
    static lockStack: {
        scrollTop: number;
        hideScroll: boolean;
    }[];
    static rootSelector: string;
    static bodyLockClass: string;
    static scrollbarWidth: string;
    static lock(hideScroll: boolean): void;
    static unlock(): void;
    static init(): void;
}
