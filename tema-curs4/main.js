import { Grid } from './grid.js';
import { L } from './shapes/l-shape.js';
import { O } from './shapes/o-shape.js';
import { I } from './shapes/i-shape.js';
import { S } from './shapes/s-shape.js';
import { Z } from './shapes/z-shape.js';
import { J } from './shapes/j-shape.js';
import { T } from './shapes/t-shape.js';
import { Movement } from '/movement.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();


const lShape = new L(0, 3, grid.cells);
lShape.draw();

const oShape = new O(0, 4, grid.cells);
oShape.draw();

const iShape = new I(0, 2, grid.cells);
iShape.draw();

const sShape = new S(5, 6, grid.cells);
sShape.draw();

const zShape = new Z(8, 1, grid.cells);
zShape.draw();

const jShape = new J(5, 4, grid.cells);
jShape.draw();

const tShape = new T(4, 5, grid.cells);
tShape.draw();


document.addEventListener("keydown", event => {
    const movement=new Movement(oShape,grid,event.key);
    movement.activateHandlers();
});


setInterval(() => {
    grid.draw();
    oShape.moveDown();
    oShape.draw();
}, 500);







