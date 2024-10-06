/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    return doThisShitRecursively(digits, (digits.length)-1);
};

function doThisShitRecursively(digits, i){
    if (i < 0) {
        digits.unshift(1);
        return digits;
    }
    
    if (digits[i] === 9) {
        digits[i] = 0;
        return doThisShitRecursively(digits, i - 1);
    }

    digits[i]++;
    
    return digits;
}