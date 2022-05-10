

function pangrams(s){
    let contains = new Map
    let lower = s.toLowerCase();
    console.log(lower);
    for( char of s){
        if( char >= "a" && char <= "z" || char >= "A" && char <= "Z"){
            contains.set(char);
            console.log(contains);
        }

    }
}


// console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("Ww"));