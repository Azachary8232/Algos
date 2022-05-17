



function factorial(n){
    if( n == 1){
        return 1
    }

    return n * factorial(n-1)

}

console.log(factorial(5))


            // Sum an Array with Recursion


function sum(arr){                      //Time: O(n)^2
    if (arr.length === 0){
        return 0
    }
    let rest = arr.slice(1);
    return arr[0] + sum(rest);
}

            //Sum an array with recursion Without Slice

function sum2(arr){                     //Time O(n)
    return sum2Helper(arr, 0);
}

function sum2Helper(arr, idx){
    if( idx === arr.length){
        return 0
    }
    return arr[idx] + sum2Helper(arr, idx + 1);
}

console.log(sum([1,5,7,-2]))
console.log(sum2([1,5,7,-2]))


                                       //Multi-Branch Recursion (Fibonacci)

function fib(n){               //Time: O(2^n)         
    if(n === 1 || n === 2) {
        return 1
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(5))


                                 //Combinations with Recursion

function combinations(elements){                   
    if( elements.length === 0){
        return [ [] ]
    }
    let firstEl = elements[0];
    let rest = elements.slice(1);

    let comboWithoutFirst = combinations(rest);
    let comboWithFirst = [];

    comboWithoutFirst.forEach(comb => {
        let combWithFirst = [...comb, firstEl];
        comboWithFirst.push(combWithFirst);
    });

    return [ ...comboWithoutFirst, ...comboWithFirst];
}

console.log(combinations(['a', 'b', 'c','d']));

