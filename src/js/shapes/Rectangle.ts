export class Rectangle {
    canvas : HTMLCanvasElement;
    context : CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("Swiss-flag") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    }
    drawSwissFlag() {
        this.context.fillStyle = "red";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "white";

        this.context.fillRect(267.6, 39.7, 64.9, 280.7);
        this.context.fillRect((this.canvas.width /2) - (280.7 / 2), (this.canvas.height /2) - (64.9/2), 280.7, 64.9);
    }
}