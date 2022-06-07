




function combinations(elements){                    //Combinations with Recursion
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
