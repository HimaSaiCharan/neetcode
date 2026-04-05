/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let listLength = 0;
        let curr = head;

        while(curr) {
            listLength++;
            curr = curr.next;
        }

        const removeIndexFromStart = listLength - n;

        if(removeIndexFromStart === 0) {
            return head.next;
        }

        curr = head
        for(let i = 0; i < listLength - 1; i++) {
            if(i + 1 === removeIndexFromStart) {
                curr.next = curr.next.next;
                break;
            }

            curr = curr.next;
        }

        return head;
    }
}
