class Solution {
  solve(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let start =
      sortedNums[0] * sortedNums[1] * sortedNums[sortedNums.length - 1];
    let end =
      sortedNums[sortedNums.length - 3] *
      sortedNums[sortedNums.length - 2] *
      sortedNums[sortedNums.length - 1];
    return start > end ? start : end;
  }
}
