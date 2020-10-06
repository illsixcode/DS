class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }

        ++this.length;
        return this;
    }

    pop(){
        if(!this.head) return undefined
        const lastNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            lastNode.prev = null;
        }
        --this.length;
        return lastNode;   
    }

    shift(){
        if(!this.head)return undefined
        const oldHead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        if(!this.head){
            return this.push(val);
        }else{
            const newHead = new Node(val);
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;
        }
        ++this.length;
        return this;
    }

    get(index){
        if(index === undefined) return null;
        if(index < 0 || index >= this.length)return null;
        const halfLength = Math.floor(this.length / 2);
        if(index <= halfLength){
            let counter = 0;
            let curNode = this.head;
            while(counter < index){
                curNode = curNode.next;
                ++counter;
            }
            return curNode;
        }else{
            let counter = this.length - 1;
            let curNode = this.tail;
            while(counter > index){
                curNode = curNode.prev;
                --counter;
            }
            return curNode;
        }
    }

    set(val,index){
        const target = this.get(index);
        if(target){
            target.val = val;
            return true;
        }
        return false;
    }

    insert(val,index){
        if(index === undefined) return false;
        if(index < 0 || index >= this.length)return false;
        if(index === 0) return !!this.unshift(val);
        if(index===this.length) return !!this.push(val);
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const next = prev.next;
        newNode.prev = prev;
        newNode.next = next;
        next.prev = newNode;
        prev.next = newNode;
        ++this.length;
        return true;
    }

    remove(index){
        if(index === undefined) return null;
        if(index < 0 || index >= this.length)return null;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();
        const target = this.get(index)
        const prev = target.prev;
        const next = target.next;
        prev.next = next;
        next.prev = prev;
        target.next = null;
        target.prev = null;
         --this.length;
        return target;
    }
    
    reverse(){
        if(this.length < 2) return this;
        let current = this.head;
        let before = null;
        let next = null;
        for(let i =0; i < this.length; ++i){
            next = current.next;
            current.next = before;
            current.prev = next;
            before = current;
            current = next;    
        }
        const tempHead = this.head;
        this.head =this.tail;
        this.tail = tempHead;
        
        return this;
    }    
}
