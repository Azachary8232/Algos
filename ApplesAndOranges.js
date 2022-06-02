



function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for( let distance of apples){
        if( a + distance >= s && a + distance <= t){
            appleCount ++
        }
    }

    for( let distance of oranges){
        if( b + distance >= s && b + distance <= t){
            orangeCount ++
        }
    }

    console.log(appleCount);
    console.log(orangeCount);

}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);