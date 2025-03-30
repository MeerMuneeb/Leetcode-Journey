/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    var arr = [...nums.filter((n) => n !== 0), ...nums.filter((n) => n === 0)]
    for (i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
};