class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function buatList(arr) {
    if (!arr.length) return null;

    const head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(head) {
    let current = head;
    let result = '';

    while (current) {
        result += current.next
            ? `[${current.data}] → `
            : `[${current.data}]`;

        current = current.next;
    }

    console.log(result);
}

// 1. Cek Palindrom
function palindromLL(head) {
    const arr = [];

    let current = head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    const reversed = [...arr].reverse();

    return JSON.stringify(arr) === JSON.stringify(reversed);
}

// 2. Hapus node ke-n dari akhir
function hapusNDariAkhir(head, n) {
    const dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

// 3. Node tengah
function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

// TESTING

console.log('=== Palindrom ===');
console.log(
    palindromLL(
        buatList([1,2,3,2,1])
    )
);

console.log(
    palindromLL(
        buatList([1,2,3,4])
    )
);

console.log('\n=== Hapus N dari Akhir ===');

let list1 = buatList([1,2,3,4,5]);

list1 = hapusNDariAkhir(list1, 2);

printList(list1);

console.log('\n=== Tengah Linked List ===');

console.log(
    tengahLinkedList(
        buatList([1,2,3,4,5])
    )
);

console.log(
    tengahLinkedList(
        buatList([1,2,3,4,5,6])
    )
);
