
function balancePoint(arr){
    let left = arr[0];
    let balance = 1 ;
    let right = arr[2];
    for(let i = 3; i < arr.length; i++){
        right += arr[i];
    }
    if( left == right ){
        return true
    }
    for(let i = 2; i < arr.length - 1; i++){
        left += arr[balance];
        balance = i;
        right -= arr[i];
        if(left == right){
            return balance
        }
    }
    return "No Balance";
}





console.log(balancePoint([1,1,4,2,1]));








