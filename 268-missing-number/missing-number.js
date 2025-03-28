/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    var missing = 0;

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i - 1];
        let next = nums[i];

        for (let j = current + 1; j < next; j++) {
            missing = j;
        }        
    }

    if (missing === 0 && nums[0] === 0){
        missing = nums[nums.length - 1] + 1            
    }

    return missing;
};