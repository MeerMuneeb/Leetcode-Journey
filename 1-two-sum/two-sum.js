/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sol = {}
    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i]
        if(sol[difference] !== undefined){
            return [sol[difference], i]
        }
        sol[nums[i]] = i
    }
};