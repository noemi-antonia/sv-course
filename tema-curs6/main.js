import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, createNewShape } from './shapes/utils/shape-generator.js';
import { Game } from './game.js';
import { Validator } from './shapes/utils/validator.js';


const rows = 20;
const columns = 10;
let intervalId;
let game;
let nextShape;
let nextShapeIndex;
let shape;
let movement;

const canvas = document.getElementById('canvasId');
const nextShapeCanvas = document.getElementById('miniCanvasId');


const grid = new Grid(rows, columns, canvas);
grid.create();
grid.draw();

const nextShapeGrid = new Grid(6, 6, nextShapeCanvas);
nextShapeGrid.create();
nextShapeGrid.draw();

let { cells } = grid;


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

const generateAndDrawNextShape = () => {
    nextShapeIndex = generateNewShape();
    nextShape = createNewShape(nextShapeGrid.cells, nextShapeIndex, 1, 2);
    nextShape.draw();
}

const nextShapeAvailable = () => {
    const validator = new Validator(shape, cells);
    const nextNotAvalaible = validator.checkNext(shape.row, shape.column);
    if (nextNotAvalaible) {
        console.log("nextNotAV");
        return false;
    }
    return true;
}

const animate = () => {
    if (movement.canMove) {
        movement.down(intervalId);
    } else {
        clearInterval(intervalId);
        game.updateScoreAndLines();
        shape = createNewShape(cells, nextShapeIndex, 0, 4);
        if (!nextShapeAvailable()) {
            game.over();
            return;
        }
        shape.draw();
        movement = new Movement(shape, cells, game);
        nextShapeGrid.clear();
        generateAndDrawNextShape();
        intervalId = setInterval(animate, 200);
    }
}

const startGameButton = document.getElementById('startGame');

startGameButton.addEventListener('click', () => {
    game = new Game(grid, nextShapeGrid);
    shape = createNewShape(cells, generateNewShape(), 0, 4);
    movement = new Movement(shape, cells, game);
    generateAndDrawNextShape();
    intervalId = setInterval(animate, 200);
});




