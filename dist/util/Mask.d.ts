export declare enum UnitValid {
    valid = 1,
    invalid = 0,
    incomplete = -1
}
export declare class MaskUnit {
    type: UnitTypes;
    definition: string;
    mask: string;
    value: string;
    constructor(type: UnitTypes, definition: string);
    fill(value: string): string;
    isValid(): UnitValid;
    static isRangeValid(definition: string, value: string): boolean;
    static getMask(type: UnitTypes, definition: string): string;
    static getRangeMask(definition: string): string;
}
export default class Mask {
    units: MaskUnit[];
    mask: string;
    constructor(mask: string);
    parse(mask: string): string;
    fill(value: string): string;
    isValid(): boolean;
    getVirtualPosition(position: number): number;
    getMaskPosition(position: number): number;
    getVirtualSelection(selection: ISelection): {
        start: number;
        end: number;
        direction: "forward" | "none" | "backward";
    };
    formatClean(clean: string, allowLessValid?: boolean): string;
    formatValue(value: string, allowLessValid?: boolean): string;
    updateSelection(value: string, selection: ISelection, keyboardMovement?: KeyboardMovement): IMaskUpdate;
    updateValue(value: string, oldValue: string): IMaskUpdate;
    deleteCharacter(value: string, selection: ISelection, forward: boolean): {
        value: string;
        selectionStart: number;
        selectionEnd: number;
    };
    static cleanValue(value: string): string;
    static cleanValueWithSpaces(value: string): string;
    static isValidCharacter(character: string, placeholder?: boolean): boolean;
}
declare enum UnitTypes {
    numeric = "numeric",
    alpha = "alpha",
    alphanumeric = "alphanumeric",
    hexidecimal = "hexidecimal",
    escaped = "escaped",
    range = "range"
}
export declare enum ValidCharacter {
    placeholder = "_",
    alpha = "a",
    number = "9",
    alphanumeric = "n",
    hexadecimal = "0"
}
export interface ISelection {
    start: number;
    end: number;
    direction: 'forward' | 'backward' | 'none';
}
export interface IMaskUpdate {
    value?: string;
    selectionStart?: number;
    selectionEnd?: number;
}
export declare enum KeyboardMovement {
    none = 0,
    home = 1,
    end = 2,
    left = 3,
    right = 4
}
export {};
