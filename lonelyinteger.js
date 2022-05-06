

// check array for only non-duplicate
// loop through array


function lonelyinterger(a) {
    const newMap = new Map();
    let result;
    for( let i = 0; i < a.length; i++){
        if(newMap.has(a[i])){
            newMap.delete(a[i]);
        }
    else{
        newMap.set(a[i], a[i]);
    }
    }
    newMap.forEach(function(value, key) {
        result = value;
    })
    return result;
}

console.log(lonelyinterger([1,2,3,4,3,2,1]));