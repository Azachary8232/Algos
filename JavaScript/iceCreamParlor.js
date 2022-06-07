

// loop through arr
// get two values that add up to m

let results = [];

//  JavaScript Refactored
function icecreamParlor(m, arr) {

    //  Java Script Brute Force
    
    // for(let i = 0; i < arr.length; i++){
    //     flavor1 = arr[i];
    //     for( let j = i+1; j < arr.length; j++){   
    //         if(flavor1 + arr[j] == m){
    //             results.push(i+1);
    //             results.push(j+1);
    //             console.log(results);
    //             return results
    //         }    
            
    //     }
    // }

    let temp_dict = {}
    for(let i = 0; i < arr.length; i++){
        if(temp_dict[arr[i]]){
            return [temp_dict[arr[i]], i+1]
        }
        else{
            let diff = m - arr[i];
            temp_dict[diff] = i+1;
        }
    }

    //      In Python

    // for i in range(len(arr)):
    //     if arr[i] in temp_dict:
    //         return [temp_dict[arr[i]]+1, i+1]
    //     else:
    //         diff = m - arr[i]
    //         temp_dict[diff] = i

    
}

console.log(icecreamParlor(6, [1,3,4,5,6]));

