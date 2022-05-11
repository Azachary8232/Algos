


function birthdays(s, d, m) {
    let count = 0;
    let monthCount = 1
    for( let i = 0; i < s.length; i++ ){
        if(s[i] == s[i+1]){
            for (let j = i; j < m; j++){
                if(s[j] == s[j+1]){
                    monthCount ++;
                    if(monthCount == m){
                        count ++;
                    }
                    else{
                        monthCount = 1
                    }
                }
                else{
                    break
                }
            }
        }
        else if(s[i] + s[i+1] == d){
            count += 1;
        }
    }
    return count


}


console.log(birthdays([2,2,1,3,2],4,2));