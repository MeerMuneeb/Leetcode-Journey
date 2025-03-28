/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums]
    this.current = [...nums]
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return [...this.original]
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuffled = [...this.current]
    for (i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */