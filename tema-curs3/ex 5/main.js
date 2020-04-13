const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");

const rows = 20;
const columns = 10;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            grid[row][column] = new Cell(row, column, "white");
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].draw();
        }
    }
}

createGrid();
drawGrid();

class Square {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }

    draw(){
        context.beginPath();
        context.fillStyle = "green";

        context.rect((this.column-1)*width,(this.row-1)*height,2*width,2*height); 
        //-1 pt ca indexarea incepe de la 0 iar *2 pt a ocupa 2x2 casute

        context.fill();
        context.stroke();
        context.closePath();
    }
    
}
square = new Square(2,3); square.draw();
square2 = new Square(5,7); square2.draw();



