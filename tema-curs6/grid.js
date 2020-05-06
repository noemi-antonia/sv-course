import { Cell } from './cell.js';

export class Grid {
    constructor(rows, columns, canvas) {
        this.rows = rows;
        this.columns = columns;
        this.cells = [];
        this.canvas = canvas;
        this.lines = 0;
    }

    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, '#5fd7fc', this.canvas);
            }
        }
    }

    recreate() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                let cell = this.cells[row][column];
                this.cells[row][column] = new Cell(row, column, cell.color, this.canvas);
                this.cells[row][column].isEmpty = cell.isEmpty;
            }
        }
    }

    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column].draw();
            }
        }
    }

    score() {
        //1. Get full rows
        let fullRows = [];
        for (let row = 0; row < this.rows; row++) {
            if (this.isFullRow(row)) {
                fullRows.push(row);
            }
        }
        //2. if we have full rows
        const fullRowsLength = fullRows.length;

        if (fullRowsLength) { // if 0 -> false
            //delete full rows
            for (let row = 0; row < fullRows.length; row++) {
                this.deleteRow(fullRows[row]);
            }

            this.lines += fullRowsLength;

            //3. add empty rows on top of the grid
            this.cells = this.attachGridRows(fullRowsLength);

            //4. redraw/recreate grid
            this.recreate(); //TODO - last session

            //5. return score;
            return fullRowsLength * 10;
        }

        return 0;
    }

    isFullRow(rowIndex) {
        return this.cells[rowIndex].every(cell => !cell.isEmpty);
    }

    deleteRow(rowIndex) {
        this.cells.splice(rowIndex, 1);
    }

    attachGridRows(rowsNumber) {
        const newRows = this.generateNewRows(rowsNumber);
        for (let row = 0; row < newRows.length; row++) {
            this.cells.unshift(newRows[row]);
        }

        return this.cells;
    }

    generateNewRows(rowsNumber) {
        const newRows = [];
        for (let row = 0; row < rowsNumber; row++) {
            newRows[row] = [];
            for (let column = 0; column < this.columns; column++) {
                newRows[row][column] = new Cell(row, column, '#5fd7fc', this.canvas);
            }
        }
        return newRows;
    }

    clear() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, '#5fd7fc', this.canvas);
                this.cells[row][column].isEmpty = true;
                this.cells[row][column].draw();
            }
        }
    }

}