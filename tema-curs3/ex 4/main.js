const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");

const rows = 8;
const columns = 8;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            if( ( (row%2)==1 && (column%2)==0 ) || ( (row%2)==0 && (column%2)==1 ) )
                grid[row][column] = new Cell(row, column, "black");
            else
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



