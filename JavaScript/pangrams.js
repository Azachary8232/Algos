

function pangrams(s){
    let contains = new Map
    let lower = s.toLowerCase();
    console.log(lower);
    for( let char of lower){
        if( char >= "a" && char <= "z"){
            contains.set(char);
        }  
    }
    if(contains.size == 26){
        return "pangram"
    }
    else{
        return "not pangram"
    }
}


console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
