// link for the problem https://binarysearch.com/problems/Repeated-Addition
class Solution {
    solve(n) {
        if (n >= 10) return this.solve(("" + n).split("").reduce((total, next) => total + +next, 0))
        else return n
    }
}
