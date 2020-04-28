export class Score {
    constructor() {
        this.scoreElement = document.getElementById('scoreElement');
        this.score = 0;
    }

    increase() {
        this.score += 10;
        this.update();
    }

    update() {
        this.scoreElement.textContent = "Score: " + this.score;
    }
}