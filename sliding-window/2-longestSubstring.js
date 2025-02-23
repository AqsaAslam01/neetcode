function longestSubstring(s) {
    const set = new Set();
    let start = 0;
    let maxLength = 0;

    for(let i=0; i<s.length; i++) {
        if(set.has(s[i])) {
            set.delete(s[start]);
            start++;
        }
        set.add(s[i]);
        maxLength = Math.max(maxLength, i-start+1);
    }
    return maxLength;
}

console.log(longestSubstring('zxyzxyz'));