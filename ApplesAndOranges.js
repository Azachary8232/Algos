



function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for( distance in apples){
        if( distance + a > s && distance + a < t){
            appleCount ++
        }
    }

    console.log(appleCount);

}




console.log(countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]));