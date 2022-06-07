


function diagonalDifference(arr){
    console.log(arr);
    let results;
    let d1 = 0;
    let d2 = 0;
    let i1 = 0;
    let i2 = 0;
    // for( let i = 0; i < arr[0][0]; i++){
    //     i2 = arr.length - 1;
    //     d1 += arr[i1]
    //     d2 += arr[i2];
    //     console.log(i1)
    //     console.log(i2)
    // }

    // console.log(d1);
    // console.log(d2);

    // return rows;
}


console.log(diagonalDifference([[3][11,2,4,4,5,6,10,8,-12]]));


def diagonalDifference(arr):
    num = len(arr)
    first = 0
    second = 0
    for i in range(0, num):
        first += arr[i][i]
        second += arr[i][num - i - 1]
        
    return abs(first - second)