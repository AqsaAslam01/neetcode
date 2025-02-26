class Deque {
    constructor() {
        this.data = []
    }
    pushBack(value) {
        this.data.push(value);
    }
    popBack() {
        this.data.pop()
    }
    popFront() {
        this.data.shift()
    }
    front() {
        return this.data[0];
    }
    back() {
        return this.data[this.data.length - 1];
    }
    size() {
        return this.data.length;
    }
}


function maxSlidingWindow(nums, k) {
    const n = nums.length;
    const output = new Array(n - k + 1);
    const q = new Deque();
    let l = 0, r = 0;
    
    while(r < n) {
        while(q.size() && nums[q.back()] < nums[r]) {
            q.popBack();
        }
        q.pushBack(r);

        if(q.front() < l) {
            q.popFront();
        }
        if((r + 1) >= k) {
            output[l] = nums[q.front()];
            l++;
        }
        r++;
    }
    return output;

}

console.log(maxSlidingWindow([1,2,1,0,4,2,6], 3))