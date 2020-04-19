import { Shape } from '/shape.js';

export class J extends Shape{
    constructor(row, column, cells) {
        super(row, column, cells);
        //TODO - why const.
        this.template = [
            [0,1],
            [0,1],
            [1,1]
        ];
        this.color = '#ff68be';
    }
}