class Node{
    constructor(value){
        this.value  = value;
        this.next =null;
    }
}

class Queue{
    constructor(){
        this.first =null;
        this.last =null;
        this.size = 0
    }
    enqueue(val){
        var newNode =new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last =newNode;
        }else{
            this.last.next = newNode;
            this.last =newNode;
        }
        ++this.size;
    }

    dequeue(){
        if(this.size===0)return null;
        var temp = this.first;
        if(this.first === this.last){
            console.log("first last same")
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;

    }

}
