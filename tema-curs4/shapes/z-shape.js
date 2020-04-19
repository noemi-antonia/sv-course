import { Shape } from '/shape.js';

export class Z extends Shape{
    constructor(row, column, cells) {
        super(row, column, cells);
        //TODO - why const.
        this.template = [
            [1,1,0],
            [0,1,1]
        ];
        this.color = '#65a724';
    }
}