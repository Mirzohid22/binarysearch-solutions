//link for the problem: https://binarysearch.com/problems/Insert-Into-Linked-List
class Solution {
    solve(head, pos, val) {
        if(pos == 0) {
            return new LLNode(val, head)
        }
        head.next = this.solve(head.next, pos - 1, val)
        return head
    } 
}
