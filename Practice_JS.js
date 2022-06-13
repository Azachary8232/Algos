

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let left = 0;
        let right = n;
        
        while(left + 1 != right){
            console.log(left);
            console.log(right);
            let mid = Math.floor((left + right) / 2);
            console.log(mid)
            if(isBadVersion(mid) === false){
                left = mid;
                
            } 
            else if(isBadVersion(mid) === true){
                right = mid;
            }
            console.log("space")  
        }
        return right;
    };
};