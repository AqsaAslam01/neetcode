function eatingBanana(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let res = right;

    while(left <= right) {
        let k = Math.floor((left + right)/2);
        let totalTime = 0;
        for(const p of piles) {
            totalTime += Math.ceil(p/k);
        }
        if(totalTime <= h) {
            res = k;
            right = k - 1;
        } else {
            left = k + 1;
        }
    }
    return res;
}

console.log(eatingBanana([1,4,3,2], 9));