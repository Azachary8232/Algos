// Snake
//  - queue for snake body (array)
//  - draw() - draw the grid with the snakes body
//  - move() - take in a direction, manipulate queue

class Snake{
    constructor() {
        this.snakeBody = [
            [4,1],
            [4,2],
            [4,3],
            [4,4],
        ];
    }

    draw() {
        const grid = [];
        for( let i = 0; i < 10; i++){
            const row = [];
            for( let j = 0; j < 10; j++){
                row.push(' ')
            }
            grid.push(row)
        }
        grid.forEach(row => console.log(row.join('|')))
        console.log(grid)
    }
}

const game = new Snake();
game.draw();