import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';
import { Score } from './score.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();
let score = new Score();

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
    } else {
        clearInterval(intervalId);

        /* hasMatch returneaza nr-ul row-ului ocupat 
        in cazul in care exista, altfel, -1 */
        let match = grid.hasMatch();

        while (match > -1) {
            grid.collapse(match);
            score.increase();
            match = grid.hasMatch();
        }
        
        shape = generateNewShape(grid.cells);
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 500);
    }
}

let intervalId = setInterval(animate, 500);




