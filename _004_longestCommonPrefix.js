/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const strsLengths = strs.map((str)=>str.length);
    const minLenght   = (strsLengths.sort())[0];
    let prefix        = '';

    for(let i = 0; i<minLenght; i++){
        for(j = 0; j< strs.length; j++){
            if(strs[j][i]!==strs[0][i]) return prefix;
        }
        
        prefix = prefix + strs[0][i];
    }

    return prefix;
};