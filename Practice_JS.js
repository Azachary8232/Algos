


//



// var minimumTotal = function(triangle) {
//     let sum = triangle[0][0];
//     let currentI = 0;
//     console.log(sum);
//     for(let i = 1; i < triangle.length; i++){
//         if(triangle[i][currentI] < triangle[i][currentI + 1]){
//             sum += triangle[i][currentI];
//         } else {
//             sum += triangle[i][currentI + 1];
//             currentI += 1;
//         }
//         console.log(sum);
//     }
//     return sum;
// };

// console.log(minimumTotal([[2], [3, 4], [6, 5, 9], [4, 4, 8, 0]]))

var minimumTotal = function(triangle) {
    let sum = triangle[0][0];
    let currentI = 0;
    console.log(sum);
    for(let i = 1; i < triangle.length; i++){
        if(triangle[i][currentI] < triangle[i][currentI + 1]){
            sum += triangle[i][currentI];
        } else {
            sum += triangle[i][currentI + 1];
            currentI += 1;
        }
        console.log(sum);
    }
    return sum;
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 9], [4, 4, 8, 0]]))