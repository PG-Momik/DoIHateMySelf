/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)) return  nums.indexOf(target)

    let mid = Math.floor(nums.length / 2);
    let i   = 0;
    
    if (nums[mid] < target) {
        i = mid;
    }

    for (; i < nums.length; i++) {
        if (nums[i] >= target) return i;
    }

    return nums.length;
};

