/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                return [i, j];
            }
        }
    }
    return null; // handle case when no matching pair is found
};

console.log(twoSum([3, 2, 4], 6)); 

// @lc code=end
