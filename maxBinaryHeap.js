class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let curIndex = this.values.length - 1;
        let parentIndex = Math.floor((curIndex - 1) / 2);
        while (curIndex > 0 && this.values[parentIndex] < this.values[curIndex]) {
            let temp = this.values[curIndex];
            this.values[curIndex] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            curIndex = parentIndex;
            parentIndex = Math.floor((curIndex - 1) / 2);
        }
    }

    extractMax(){
        const max = this.values[0];
        const last = this.values.pop();
        this.values[0] = last;
        let curIndex = 0;
        //sink down.
        while(true){
            let leftChildIdx = curIndex*2+1;
            if(leftChildIdx >= this.values.length)break;
            let rightChildIdx = curIndex*2+2;
            let largerIndex = null;
            if(rightChildIdx >= this.values.length){
                largerIndex = leftChildIdx;
            }else{
                largerIndex = this.values[leftChildIdx] > this.values[rightChildIdx] ? leftChildIdx : rightChildIdx;                
            }
            if(this.values[largerIndex] < this.values[curIndex])break;
            let temp = this.values[curIndex];
            this.values[curIndex] = this.values[largerIndex];
            this.values[largerIndex] = temp;
            curIndex = largerIndex;
        }
        return max;
    }
}
