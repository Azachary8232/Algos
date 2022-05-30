

function LongestWord(sen) { 
    let count = 0
    let longWord = ""
    let currentWord = ""
    for(let i = 0; i < sen.length; i++){
        let char = sen[i]
        if( char >= "a" && char <= "z" || char >= "A" && char <= "Z"){
            currentWord += sen[i] 
        }
        else if(sen[i] == " " || i + 1 == sen.length){
            if( currentWord.length > longWord.length){
                console.log("tiger")
                // longWord = currentWord;
                // currentWord = ""
            }
            else{
                currentWord = ""
            }
        }
        else{
            console.log("donkey")
        }
    }
        





        // if(sen[i] != " " || i + 1 != sen.length){
        //     let char = sen[i]
        //     if( char >= "a" && char <= "z" || char >= "A" && char <= "Z"){
        //         currentWord += sen[i] 
        //         console.log(currentWord)
        //     }
        //     else{
        //         continue
        //     }
        // }        
        // else{
        //     console.log(currentWord + " space")
        //     if( currentWord.length > longWord.length){
        //         longWord = currentWord;
        //         currentWord = ""
        //     }
        //     else{
        //         console.log(currentWord + "1")
        //         currentWord = ""
        //         console.log(currentWord + "2")
        //     }
        // }

    // code goes here  
    return longWord; 

}



console.log(LongestWord("fun&!! time"))