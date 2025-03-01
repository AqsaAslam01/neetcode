class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }
    pop() {
        if(this.stack.pop() === this.getMin()) {
            this.minStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length-1];
    }
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());   
console.log(minStack.getMin()); 