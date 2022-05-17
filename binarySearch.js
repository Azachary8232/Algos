

function binarySearch(arr, target) {        //Recursive Implementation   Time: O(log(n))  Space: O(log(n))
    return binarySearchHelper(arr, target, 0, arr.length - 1);
}

function binarySearchHelper(arr, target, left, right){
    if(left > right){
        return false
    }

    let mid = Math.floor((left + right) / 2);
    if( target === arr[mid]){
        return mid
    }
    else if( target < arr[mid]){
        return binarySearchHelper(arr, target, left, mid - 1);
    }
    else{
        return binarySearchHelper(arr, target, mid + 1, right);
    }
}

// function binarySearch(arr, target) {       //Iterive Implementation  Time: O(log(n)) Space: O(1)
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right){       // Use While loop because we don't know how many loops will be required
//         let mid = Math.floor((left + right) / 2);
//         if( target === arr[mid]){
//             return mid
//         }
//         else if( target < arr[mid]){
//             right = mid -1;
//         }
//         else{
//             left = mid + 1;
//         }
//     }
//     return false;
// }


console.log(binarySearch([2,7,8,9,10,13,17,19,21], 19))