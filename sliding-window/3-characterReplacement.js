function characterReplacement(s, k) {
    let count = new Map();
    let maxf = 0;
    let res = 0;
    let l = 0

    for(let r = 0; r < s.length; r++) {
        count.set(s[r], (count.get(s[r]) || 0) + 1);
        maxf = Math.max(maxf, count.get(s[r]));
        while((r - l + 1) - maxf > k) {
          count.set(s[l], count.get(s[l]) -1);
          l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
}

console.log(characterReplacement('XYYX', 2));