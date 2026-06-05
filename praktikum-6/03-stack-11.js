class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    removeHead() {
        if (!this.head) return null;

        const removed = this.head.data;
        this.head = this.head.next;

        this.length--;

        return removed;
    }

    print() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.next
                ? `[${current.data}] → `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log(result || '[Kosong]');
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.head
            ? this.list.head.data
            : null;
    }

    isEmpty() {
        return this.list.length === 0;
    }

    size() {
        return this.list.length;
    }

    print() {
        this.list.print();
    }
}

// ======================
// TESTING
// ======================

const stack = new Stack();

console.log('=== Push ===');
stack.push('A');
stack.push('B');
stack.push('C');
stack.print();

console.log('\n=== Peek ===');
console.log(stack.peek());

console.log('\n=== Pop ===');
console.log(stack.pop());
stack.print();

console.log('\n=== Size ===');
console.log(stack.size());

console.log('\n=== Is Empty ===');
console.log(stack.isEmpty());