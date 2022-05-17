

// function binarySearch(arr, target) {
//     let mid  = Math.floor(arr.length / 2);
//     let newArr = [];
//     if( arr[mid] < target){
//         for ( let i = 0; i < mid; i++){
//             newArr.push(arr[i])
//         }
//         binarySearch(newArr);
//     }
//     else{
//         for( let i = mid; i < arr.length; i++){
//             newArr.push(arr[i]);
//         }
//         binarySearch(newArr);
//     }
// }

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right){       // Use While loop because we don't know how many loops will be required
        let mid = Math.floor((left + right) / 2);
        if( target === arr[mid]){
            return mid
        }
        else if( target < arr[mid]){
            right = mid -1;
        }
        else{
            left = mid + 1;
        }
    }
    return false;
}


console.log(binarySearch([2,7,8,9,10,13,17,19,21], 19))