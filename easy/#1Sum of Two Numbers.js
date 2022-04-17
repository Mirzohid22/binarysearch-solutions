class Solution {
    solve(nums, k) {
        let map = new Map()
        let res = false
        for(let i = 0; i < nums.length; i++) {
            if(map.has(k - nums[i])) {
                res = true
                break
            }

            map.set(nums[i], 1)
        }

        return res
    }    
}
