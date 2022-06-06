



// function findDisappearedNumers(nums){
//     newArray = [];

//     for(let i = 1; i <= nums.length; i++){
//         if(!nums.includes(i)){
//             newArray.push(i);
//         }
//     }
//     return newArray;

// }

// console.log(findDisappearedNumers([4,3,2,7,8,2,3,1]))


function findDisappearedNumers(nums){
    const newSet = new Set(nums);
    let newArray = [];

    for(let i = 1; i <= nums.length; i++){
        if(!newSet.has(i)){
            newArray.push(i);
        }
    }
    return newArray;

}

console.log(findDisappearedNumers([4,3,2,7,8,2,3,1]))