class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.y * width, this.x * height, width, height);
        context.fill();
        context.stroke();
        context.closePath();
    }
}