// URL for problem https://binarysearch.com/problems/5-Star-Review-Percentage
class Solution {
  solve(reviews, threshold) {
    let X = 0;
    let Y = 0;
    for (let review of reviews) {
      X += review[0];
      Y += review[1];
    }

    if (threshold <= X / Y) return 0;
    if (threshold == 100) {
      return X == Y ? 0 : Infinity;
    }

    return Math.ceil((Y * threshold - 100 * X) / (100 - threshold));
  }
}
