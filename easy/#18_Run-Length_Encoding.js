// link for the problem: https://binarysearch.com/problems/Run-Length-Encoding
class Solution {
    solve(s) {
        if (s.length == 0) return ""
        let arr = [{ key: s[0], value: 0 }];
        let char = ""
        for (let i = 0; i < s.length; i++) {
            char = s[i];
            if (arr[arr.length - 1]['key'] === char) {
                arr[arr.length - 1]['value'] = arr[arr.length - 1]['value'] + 1
            } else arr.push({ key: char, value: 1 })
        }

        return arr.reduce((total, next) => total + next.value + next.key, "")
    }
}
