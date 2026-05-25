class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.prepend(data);
            return;
        }

        if (index === this.size) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        newNode.prev = current;

        current.next.prev = newNode;
        current.next = newNode;

        this.size++;
    }

    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;

            if (this.head) {
                this.head.prev = null;
            }

            this.size--;
            return;
        }

        let current = this.head;

        while (current) {
            if (current.data === data) {

                if (current.next) {
                    current.next.prev = current.prev;
                }

                if (current.prev) {
                    current.prev.next = current.next;
                }

                if (current === this.tail) {
                    this.tail = current.prev;
                }

                this.size--;
                return;
            }

            current = current.next;
        }
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    print() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.next
                ? `[${current.data}] ⇄ `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log(result);
    }

    printReverse() {
        let current = this.tail;
        let result = '';

        while (current) {
            result += current.prev
                ? `[${current.data}] ⇄ `
                : `[${current.data}]`;

            current = current.prev;
        }

        console.log(result);
    }
}

// TESTING
const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);

dll.prepend(5);

dll.insertAt(15, 2);

console.log('=== Print ===');
dll.print();

console.log('\n=== Reverse Print ===');
dll.printReverse();

console.log('\n=== Delete 20 ===');
dll.delete(20);
dll.print();

console.log('\n=== Reverse List ===');
dll.reverse();
dll.print();