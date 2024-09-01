/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const mergedHead = new ListNode(-Infinity);
    let currentMerged = mergedHead;
    let pointer1 = list1;
    let pointer2 = list2;

    while (pointer1 && pointer2) {
        if (pointer1.val <= pointer2.val) {
            currentMerged.next = pointer1;
            pointer1           = pointer1.next;
        } else {
            currentMerged.next = pointer2;
            pointer2           = pointer2.next;
        }

        currentMerged = currentMerged.next;
    }
    
    if (pointer1) currentMerged.next = pointer1;
    if (pointer2) currentMerged.next = pointer2;

    return mergedHead.next;
};
