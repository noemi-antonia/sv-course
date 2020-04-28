import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
let movement = new Movement(shape, grid.cells);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            console.log('left');
            break;
        case 'ArrowRight':
            movement.right();
            console.log('right');
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            shape.color = colors[getRandomInt(colors.length)];
            shape.draw();
            break;
    }
});



const animate = () => {

    if (movement.canMove) {
        movement.down();
        console.log('Moving');
    } else {

        console.log('Stopped');
        clearInterval(intervalId);

        console.log('checkFull');
        for (let row = grid.rows - 1; row >= 0; row--){

            if(grid.checkFull(row)){
                grid.clearRow(row);
                console.log('collapse');
                grid.collapse(row);
            }
            
        }
        console.log('generateNewShape');
        shape = generateNewShape(grid.cells);
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 500);
    }
}

let intervalId = setInterval(animate, 500);




