import { Validator } from "./validator.js";

export class Movement {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
        this.validator = new Validator(this.shape, this.cells);
        this.canMove = true;
    }

    down() {
        const row = this.shape.row;
        const column = this.shape.column;
        this.shape.clear();
        const nextNotAvailable = this.validator.checkNext(row + 1, column, this.shape.template);
        if (nextNotAvailable) {
            this.shape.draw();
            this.canMove = false;
            console.log("nextNotAvailable for down");
            return;
        }

        this.shape.row++;
        this.shape.draw();
    }

    left() {
        const row = this.shape.row;
        const column = this.shape.column;

        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1, this.shape.template);
        if (nextNotAvailable || !this.canMove) {
            this.shape.draw();
            return;
        }

        this.shape.column--;
        this.shape.draw();
    }

    right() {
        const row = this.shape.row;
        const column = this.shape.column;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column + 1, this.shape.template);
        if (nextNotAvailable || !this.canMove) {
            this.shape.draw();
            return;
        }

        this.shape.column++;
        this.shape.draw();
    }

    rotate() {
        const row = this.shape.row;
        const column = this.shape.column;

        this.shape.clear();

        const newTemplate = this.shape.getNewTemplate();
        const rotationNotAvailable = this.validator.checkNext(row, column, newTemplate);

        if (rotationNotAvailable || !this.canMove) {
            this.shape.draw();
            return;
        }

        this.shape.template = newTemplate;
        this.shape.templateIndex++; //indexul vreau sa mi se incrementeze doar in cazul in care se si asigneaza noul template
        this.shape.draw();
    }
}