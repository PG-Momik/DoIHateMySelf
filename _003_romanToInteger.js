/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const convertMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum  = 0;
    let prev = undefined;

    for(let iterations = s.length -1; iterations >=0; iterations --){
        let num = convertMap[s[iterations]];
        
        if(iterations === s.length -1){
            prev = num;
            sum  = sum+num;
            continue;
        }

        sum =  num < prev ? sum-num: sum+num;
        prev = num;
    }

    return sum
};