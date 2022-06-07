

// function FirstReverse(str){
//     return _FirstReverse(str, "")
// }

// function _FirstReverse(str, newStr){
//     if(str.length === 0){
//         return newStr
//     }
//     newStr += str[str.length-1]
//     return _FirstReverse(str.slice(0, str.length-1), newStr)
// }



// console.log(FirstReverse("coderbyte"));


function FirstReverse(str){
    let newStr = ""
    for(let i = 1; i < str.length + 1; i++){
        newStr += str[str.length - i]
    }
    return newStr
}

console.log(FirstReverse("coderbyte"))