//link for the problem: https://binarysearch.com/problems/Maximum-Number-by-Inserting-Five
class Solution {
    solve(n) {
        let possibilities = [];
        let str = "" + n;
        let res = "";
        let start = 0

        if (n < 0) start++

        for (let i = start; i < str.length + start; i++) {
            res = str.slice(0, i) + 5 + str.slice(i)
            possibilities.push(+res)
        }

        return Math.max(...possibilities)
    }
}
