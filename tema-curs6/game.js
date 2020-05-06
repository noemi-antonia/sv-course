export class Game {
    constructor(grid, nextShapeGrid) {
        this.grid = grid;
        this.nextShapeGrid = nextShapeGrid;

        this.grid.lines = 0;
        this.tetrisScore = 0;
        this.tetrisLines = 0;

        this.scoreElement = document.getElementById('score');
        this.startButtonElement = document.getElementById('startGame');
        this.linesElement = document.getElementById('lines');

        this.linesElement.innerText = this.grid.lines;
        this.scoreElement.innerText = 0;
        this.startButtonElement.disabled = true;

        this.grid.clear();
        this.nextShapeGrid.clear();
    }

    updateScoreAndLines() {
        const score = this.grid.score();
        if (score > 0) {
            this.tetrisScore += score;
            this.scoreElement.innerText = this.tetrisScore;
            this.grid.draw();
        }
        this.linesElement.innerText = this.grid.lines;
    }

    over() {
        this.startButtonElement.disabled = false;
    }
}