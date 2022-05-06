

// check array for only non-duplicate
// loop through array


function lonelyinterger(a) {
    const newMap = new Map();
    for( let i = 0; i < a.length; i++){
        if(newMap.has(a[i])){
            newMap.delete(a[i]);
        }
    else{
        newMap.set(a[i], a[i]);
    }
    }
    return newMap;
}

console.log(lonelyinterger([1,2,3,4,3,2,1]));