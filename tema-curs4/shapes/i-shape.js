import { Shape } from '/shape.js';

export class I extends Shape{
    constructor(row, column, cells) {
        super(row, column, cells);
        //TODO - why const.
        this.template = [
            [1],
            [1],
            [1],
            [1]
        ];
        this.color = 'cyan';
    }
}