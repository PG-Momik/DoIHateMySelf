/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack      = [];
    const bracketMap = {
        "}": "{",
        ")": "(",
        "]": "["
    }

   for(let i = 0 ; i<s.length; i++){
        const bracket = s[i];

        if(isOpeningBracket(bracket)){
            stack.push(bracket)
        }else if(hasRespOpeningBracketOnTop(stack, bracket)){
            stack.pop();
        }else{
            return false;
        }
    }

    if(stack.length>0){
        return false
    }
    
    return true;

    function isOpeningBracket(bracket){
        return Object.values(bracketMap).includes(bracket);
    }

    function hasRespOpeningBracketOnTop(stack, bracket){
        return stack[stack.length-1] === bracketMap[bracket]
    }
};