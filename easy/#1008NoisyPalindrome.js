class Solution {
    solve(s) {
        let arr = s.split('').filter(s => s >= 'a' && s <= 'z');
        if (arr.length === 0 || arr.length === 1) {
            return true;
        }
        return this.isPalindrome(arr);
    }
    isPalindrome(arr) {
        let i = 0;
        while (i < Math.floor(arr.length/2)) {
            if(!(arr[i] === arr[arr.length - 1 - i])){
                 return false
            }
            i++;
        }
        return true;
    }
}
