
// create a game board
// place queen on board; give it a 'q' value
// place obstacles on board; give them an 'o' value
// place queens moves on the board if not occupied by an 'o'; give them an 'm' value
// count all 'm' values



function queensAttack(n, k, r_q, c_q, obstacles){

    const gameBoard = [];
    for(let i = 0; i < n; i++){
        const row = [];
        for(let j = 0; j < n; j++){
            row.push(' ');
        }
        gameBoard.push(row);
    }

    gameBoard[r_q-1][c_q-1] = "q";

    for( let x of obstacles){
        gameBoard[x[0]-1][x[1]-1] = "o";
    }
    // queen left
    let row = r_q - 1 - 1;
    for( let col = c_q - 1 - 1; col >= 0; col--){
        if( gameBoard[r_q - 1][col] !== "o"){
            gameBoard[r_q - 1][col] = "m";
        } else{
            break
        }
        if(row >= 0 ){
            if(gameBoard[row][col] !== "o") {
                gameBoard[row][col] = "l"
                console.log(row);
                row --
            } else {
                continue
            }
        }
    }
    for( x = c_q; x < n; x++){
        if( gameBoard[r_q - 1][x] !== "o"){
            gameBoard[r_q - 1][x] = "m"
        } else{
            break
        }
        // if( gameBoard[x][x] !== "o"){
        //     gameBoard[x][x] = "r"
        // }
    }

    // queen up
    for( x = r_q -1 - 1; x >= 0; x--){
        let y = 0
        if( gameBoard[x][c_q - 1] !== "o"){
            gameBoard[x][c_q - 1] = "m"
        } else{
            break
        }
    }
    // queen down
    for( x = r_q; x < n; x++){
        if( gameBoard[x][c_q - 1] !== "o"){
            gameBoard[x][c_q - 1] = "m"
        } else{
            break
        }
        // if( gameBoard[x][x] !== "o"){
        //     gameBoard[x][x] = "m"
        // }
    }


    gameBoard.forEach(function(row) {
        console.log(row.join('|'));
    });
    console.log(gameBoard);

}

queensAttack(4, 0, 2, 3, [[4,1]]);