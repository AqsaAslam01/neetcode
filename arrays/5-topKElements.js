
function topKElements(nums, k) {
    const count = {};
    const freq = Array.from({length: nums.length+1}, ()=> [])
    for(const n of nums) {
        count[n] = (count[n] || 0) + 1;                        
    }
    for(const n in count) {
        freq[count[n]].push(n);
    }
    const res = [];
    for(let i=freq.length-1; i>0; i--) {
        for(const n of freq[i]) {
            res.push(n);
            if(res.length === k) {
                return res;
            }
        }
    }
}

console.log(topKElements([1,2,2,3,3,3], 2));
