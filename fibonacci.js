

        // Fibonacci with recursion    -  Multi-Branch Recursion

function fib(n){               //Time: O(2^n)           //Multi-Branch Recursion (Fibonacci)
    if(n === 1 || n === 2) {
        return 1
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(5))
