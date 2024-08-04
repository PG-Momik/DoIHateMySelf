/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const thisString = x.toString();
    const xLength    = thisString.length;
    const mid        =  Math.floor(xLength/2);

    for(let i = 0; i < mid; i++){
        if(thisString[i] !== thisString[xLength-i-1]) return false;
    }

    return true;
};