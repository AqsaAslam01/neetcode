class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        const values = this.keyStore.get(key) || [];
        let left = 0;
        let right = values.length - 1;
        let result = '';
        while(left <= right) {
            const mid = Math.floor((left + right)/2);
            if(values[mid][0] <= timestamp) {
                result = values[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}
const timeMap = new TimeMap();
timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
console.log(timeMap.get("alice", 1));           // return "happy"
console.log(timeMap.get("alice", 2));           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
console.log(timeMap.get("alice", 3));          // return "sad"