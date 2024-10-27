/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, seenMap = {}) {
    if (n === 0 || n === 1 || n === 2) return n;
    
    let prev1 = n - 1;
    let prev2 = n - 2;

    let val1 = 0;
    let val2 = 0;

    if (prev1 in seenMap) {
        val1 = seenMap[prev1];
    } else {
        val1 = climbStairs(prev1, seenMap);
        seenMap[prev1] = val1;
    }

    if (prev2 in seenMap) {
        val2 = seenMap[prev2];
    } else {
        val2 = climbStairs(prev2, seenMap);
        seenMap[prev2] = val2;
    }

    seenMap[n] = val1 + val2;

    return seenMap[n];
};
