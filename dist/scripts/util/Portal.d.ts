export default class Portal {
    static elements: {
        [index: string]: HTMLElement;
    };
    static addElement(name: string, element: HTMLElement | string): void;
    static removeElement(name: string): void;
    static getElement(name: string): HTMLElement;
}
