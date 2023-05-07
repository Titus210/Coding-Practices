# Two Sum Problem
***
## Introduction
The Two Sum problem is a popular algorithmic problem often asked in technical interviews. The problem asks to find two numbers in an array that add up to a given target number.

## Overview
Given an array of integers `nums` and an integer `target`, 
return the indices of the two numbers that add up to `target`.

### Example
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9, so the indices are 0 and 1.


## Algorithm
The solution to the problem using a brute force approach involves two nested loops. 
The outer loop iterates through each element of the array,
 and the inner loop iterates through the remaining elements to find a pair that sums up to the `target`.
 This approach has a time complexity of `O(n^2)`.

 Alternatively, we can use a hash table to solve the problem in `O(n)` time complexity. We can store each element of the array in a hash table along with its index. Then, for each element, we can check if the complement (target - element) is present in the hash table. If it is present, 
 we have found the pair that sums up to the `target`.

 ## Solution

Here is solution to the Two Sum problem using the brute force approach
```
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) { // j starts from i + 1
            if ((nums[i] + nums[j]) == target) {
                return [i,j];
            }
        }
    }
    return null; // handle case when no matching pair is found
};

console.log(twoSum([3, 2, 4], 6)); 
```
### Explanation
The function takes an array of integers `nums` and an integer `target` as input
 and returns an array of two integers representing the indices of the two numbers that add up to `target`. 
 If no such pair exists, it returns `null`.


Solution using hash map
```
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
}

```

## Problems EncounteredFi
First Code
```

var twoSum = function(nums, target) {
    for (i = 0; i <= nums.length; i++) {
        for (j = 0; j <= nums.length; j++) {
            let no_1 = nums[i];
            if ((nums[i] + nums[j]) == target) {
                return [i,j]

            }
          
        }
    }
};
console.log(twoSum([3, 2, 4],6)) // gives [0,0] instead of [1,2]
```
The problem with the given code is that the second loop is iterating from `0` to `nums.length`, 
 which includes an extra iteration with the index value equal to `nums.length`. 
 Since array indexing starts at `0`, this means that on the last iteration, 
 the index value will be out of __range__, which results in `undefined` value when accessing the corresponding element. 
 This leads to an incorrect output.
 To fix this issue, I changed the loop conditions to `j < nums.length` instead of `j <= nums.length` to iterate through all the elements in the array without going out of range.