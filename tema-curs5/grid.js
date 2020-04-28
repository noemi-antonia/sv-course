import { Cell } from './cell.js';

export class Grid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.cells = [];
    }

    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, '#7facf5');
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

    checkFull(row) {
        for (let column = 0; column < this.columns; column++) {
            if (this.cells[row][column].isEmpty) {
                return false;
            }
        }
        return true;
    }

    clearRow(row) {
        for (let column = 0; column < this.columns; column++) {
            this.cells[row][column].draw('#7facf5');
            this.cells[row][column].isEmpty = true;
        }
    }

    collapse(row) {

        for (let r = row - 1; r >= 0; r--) {
            for (let c = 0; c < this.columns; c++) {

                if (!this.cells[r][c].isEmpty) {

                    this.cells[r + 1][c].color = this.cells[r][c].color;
                    this.cells[r + 1][c].isEmpty = false;
                    this.cells[r + 1][c].draw();
                }

            }
            this.clearRow(r);
            console.log("clearRow" + r);

        }
    }

}