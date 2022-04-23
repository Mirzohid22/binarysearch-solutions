// link for the problem: https://binarysearch.com/problems/Mixed-Sorting
class Solution {
    solve(nums) {
        let odds = [...nums].filter((el) => el % 2 == 1 || el % 2 == -1).sort((a, b) => a - b)
        let evens = [...nums].filter((el) => el % 2 == 0).sort((a, b) => b - a)
        let positions = nums.map(el => el % 2)

        for (let i = 0; i < positions.length; i++) {
            if (positions[i] == 0) positions[i] = evens.pop()
            if (positions[i] == 1 || positions[i] == -1) positions[i] = odds.pop()
        }

        return positions
    }
}
