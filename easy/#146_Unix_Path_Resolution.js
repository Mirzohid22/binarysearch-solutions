
//link for the problem: https://binarysearch.com/problems/Unix-Path-Resolution
class Solution {
    solve(path) {
        let arr = []
        for (let i = 0; i < path.length; i++) {
            if (path[i] === "..") arr.pop();
            else if (path[i] === ".") continue;
            else arr.push(path[i])
        }
        return arr
    }
}
