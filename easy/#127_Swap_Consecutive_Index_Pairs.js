// link for the problem: https://binarysearch.com/problems/Swap-Consecutive-Index-Pairs
class Solution {
    solve(nums) {
        let arr = [...nums];
        for (let i = 0; i < nums.length; i = i + 4) {
            if (arr[i + 2] !== undefined) [arr[i], arr[i + 2]] = [arr[i + 2], arr[i]];
            if (arr[i + 3] !== undefined) [arr[i + 1], arr[i + 3]] = [arr[i + 3], arr[i + 1]];
        }
        return arr
    }
}
