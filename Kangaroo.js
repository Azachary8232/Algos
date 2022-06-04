
//write a loop for each jump
//jumps are unknown so a while loop
//each loop add jump distance from starting point
// two variable for current location of each kangaroo

// fail break will be when kangaroo with longer jump is ahead of kangaroo with smaller jump
    // need to check for kangaroo with longer jump

//final check will be if both kangaroos are on the same spot


function kangaroo(x1, v1, x2, v2){
    let positionK1 = x1;
    let positionK2 = x2;
    let longestJumper;
    let shortPostion;

    if( v1 > v2){
        longestJumper = positionK1;
        shortPostion = positionK2
    }
    else{
        longestJumper = positionK2;
        shortPostion = positionK1;
    }

    let jump = 0;

    while( longestJumper < shortPostion){
        
        console.log("running");
        positionK1 += v1;
        positionK2 += v2;

        if( v1 > v2){
            longestJumper = positionK1;
            shortPostion = positionK2
        }
        else{
            longestJumper = positionK2;
            shortPostion = positionK1;
        }
    

        if(positionK1 == positionK2){
            return "YES";
        }

    }
    return "NO";

}

console.log(kangaroo(0, 3, 4, 2));