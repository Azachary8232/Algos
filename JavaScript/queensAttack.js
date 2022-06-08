
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
    let lRowU = r_q - 1 - 1;
    let lRowD = r_q;
    for( let col = c_q - 1 - 1; col >= 0; col--){
        if( gameBoard[r_q - 1][col] !== "o"){
            gameBoard[r_q - 1][col] = "m";
        } else{
            break
        }
        if(lRowU >= 0 ){
            if(gameBoard[lRowU][col] !== "o") {
                gameBoard[lRowU][col] = "m"
                lRowU --
            } else {
                continue
            }
        }
        if(lRowD < n ){
            if(gameBoard[lRowD][col] !== "o") {
                gameBoard[lRowD][col] = "m"
                lRowD ++
            } else {
                continue
            }
        }
    }
    // queen right
    let rRowU = r_q - 1 - 1;
    let rRowD = r_q;
    for( let col = c_q; col < n; col++){
        if( gameBoard[r_q - 1][col] !== "o"){
            gameBoard[r_q - 1][col] = "m"
        } else{
            break
        }
        if(rRowU >= 0 ){
            if(gameBoard[rRowU][col] !== "o") {
                gameBoard[rRowU][col] = "m"
                rRowU --
            } else {
                continue
            }
        }
        if(rRowD < n ){
            if(gameBoard[rRowD][col] !== "o") {
                gameBoard[rRowD][col] = "m"
                rRowD ++
            } else {
                continue
            }
        }
    }

    // queen up
    for( let x = r_q -1 - 1; x >= 0; x--){
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
    }
    let count = 0
    for(let a = 0; a < n; a++){
        for(let b = 0; b < n; b++){
            if (gameBoard[a][b] === "m"){
                count++;
            }
        }
    }

    // gameBoard.forEach(function(row) {
    //     console.log(row.join('|'));
    // });
    console.log(count);

}

queensAttack(8, 1, 4, 4, [[3,5]]);