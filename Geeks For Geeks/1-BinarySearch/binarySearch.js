class Solution {
    // Function to perform binary search
    binarysearch(arr, n, k) {
        var low = 0;
        var high = n - 1;

        while (low <= high) {
            var mid = Math.floor((high + low) / 2);

            // Check if the data is at the midpoint
            if (arr[mid] === k) {
                return mid; // Return the index after finding the target.
            }
            // Check if the midpoint value is less than the target, update 'low' to 'mid + 1'
            else if (arr[mid] < k) {
                low = mid + 1;
            }
            // Check if the midpoint value is greater than the target, update 'high' to 'mid - 1'
            else {
                high = mid - 1;
            }
        }

        // If the loop ends, the target is not found in the array.
        return -1;
    }
}

// Example usage:
var arr = [1, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 20, 21, 22, 23, 24, 27, 29, 30, 31, 35, 36, 38, 39, 41, 42, 43, 44, 46, 49, 52, 53, 54, 57, 59, 61, 62, 64, 66, 67, 68, 69, 70, 71, 74, 75, 78, 79, 82, 83, 84, 86, 87, 88, 90, 91, 93, 96, 98, 99, 100];
var n = arr.length;
var key = 78;

const sol = new Solution();
var output = sol.binarysearch(arr, n, key);

if (output === -1) {
    console.log("Element not found in the array.");
} else {
    console.log(`The item is found at position ${output + 1}.`);
}
