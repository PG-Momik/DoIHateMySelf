/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aa = a;
    let bb = b;
    aLength = a.length;
    bLength = b.length;
    let pads = aLength - bLength;

    if(aLength > bLength){
        const pad = aLength - bLength;

        for(let i = 0; i<pad; i++){
            bb = "0"+bb;
        }
    }else if(bLength > aLength){
        const pad = bLength - aLength;

        for(let i = 0; i<pad; i++){
            aa = "0"+aa;
        }
    }
    
    aLength = aa.length;
    let output = "";
    let carry  = 0;

    for(let i = aLength -1 ; i>=0; i--){
        let [newCarry, remainder] = mapper(aa[i], bb[i], carry);
        carry = newCarry;
        output = `${remainder}${output}`
    }

    if (carry == 1) {
        output = `${carry}${output}`;
    }

    return output;
};

function mapper(a,b,c){
    const key = `${a}${b}${c}`;
    switch (key) {
        case '000': return [0, 0];
        case '001': return [0, 1];
        case '010': return [0, 1];
        case '011': return [1, 0];
        case '100': return [0, 1];
        case '101': return [1, 0];
        case '110': return [1, 0];
        case '111': return [1, 1];
    }
}