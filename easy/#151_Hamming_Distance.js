// link for the problem: https://binarysearch.com/problems/Hamming-Distance
class Solution {
    solve(x, y) {
        return (x ^ y).toString(2).split("").filter(el => el === "1").length
    }
}
