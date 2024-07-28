/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (const index    = 0; index < nums.length; index++) {
        const remainder = target - nums[index];
        const jindex    = nums.indexOf(remainder);

        if (jindex != -1 && jindex !== index) { 
            return [index, jindex];
        }
    }

    return null; 
};