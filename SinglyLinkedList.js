class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        if (this.head === null) {
            this.head = new Node(val)
            this.tail = this.head
        } else {
            this.tail.next = new Node(val)
            this.tail = this.tail.next
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined
        } else {
            let cur = this.head;
            let newTail = cur;
            while (cur.next) {
                newTail = cur;
                cur = cur.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length -= 1;
            return cur;
        }
    }

    shift() {
        if (this.head === null) {
            return undefined
        } else {
            let currentHead = this.head
            this.head = currentHead.next;
            this.length -= 1;
            return currentHead;
        }
    }

    unshift(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head
        let count = 0;
        while (count < index) {
            count++;
            current = current.next;
        }

        return current
    }

    set(val, index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        let targetNode = this.get(index);
        if (targetNode) {
            targetNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(val, index) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            this.push(val)
        } else if (index === 0) {
            this.unshift(val)
        } else {
            const newNode = new Node(val)
            const prev = this.get(index - 1)
            newNode.next = prev.next;
            prev.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index === this.length - 1) {
            return this.pop();
        } else if (index === 0) {
            return this.shift();
        } else {
            this.length--;
            const prev = this.get(index - 1);
            const removeNode = prev.next;
            prev.next = removeNode.next
            return removeNode.val;
        }
    }

    reverse() {
        if(this.length <= 1) return this;
        let current = this.head
        let prev = null;
        let next = current.next;
        while (current) {
            current.next = prev
            prev = current;
            current = next;
            if(next){
               next = current.next;
            }
        }
        let tempHead = this.head
        this.head = this.tail
        this.tail = tempHead

        return this;
    }
}
