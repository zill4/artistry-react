export default class ImageGenerator {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor();
    init(width: number, height: number): void;
    drawPlaceholder(): void;
    toString(): string;
    drawRect(color: string, x0: number, y0: number, x1: number, y1: number): void;
    drawLine(color: string, width: number, x0: number, y0: number, x1: number, y1: number): void;
    drawText(color: string, font: string, text: string, x: number, y: number): void;
    static createPlaceholder(width: number, height: number): string;
}
