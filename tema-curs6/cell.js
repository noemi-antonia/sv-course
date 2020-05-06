export class Cell {
    constructor(x, y, color, canvas) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.width = 30;
        this.height = 30;
        this.isEmpty = true;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.y * this.height, this.x * this.width, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}