class Solution {
    solve(nums, target) {
        let max = -Infinity;
        label: for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] < target) {
                    if (nums[i] + nums[j] == target - 1) {
                        max = target - 1
                        break label
                    }
                    max = Math.max(max, nums[i] + nums[j])
                }
            }
        }

        return max
    }
}
