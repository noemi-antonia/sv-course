export class Movement{

    constructor(shape, grid, key){
        this.shape=shape;
        this.grid=grid;
        this.key=key;
    }

    activateHandlers(){

        switch (this.key) {
            case 'ArrowUp':
                this.grid.draw();
                this.shape.moveUp();
                this.shape.draw();
                break;
            case 'ArrowDown':
                this.grid.draw();
                this.shape.moveDown();
                this.shape.draw();
                break;
            case 'ArrowLeft':
                this.grid.draw();
                this.shape.moveLeft();
                this.shape.draw();
                break;
            case 'ArrowRight':
                this.grid.draw();
                this.shape.moveRight();
                this.shape.draw();
                break;
            case 'Enter':
                this.grid.draw();
                this.shape.changeTheColor();
                this.shape.draw();
                break;
        }
    }

}