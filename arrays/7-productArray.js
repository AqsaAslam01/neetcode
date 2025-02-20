
function productArray(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    let leftprod = 1;
    for(let i=0; i<n; i++) {
        res[i] = leftprod;
        leftprod *= nums[i];
    }
    let rightprod = 1;
    for(let i=n-1; i>=0; i--) {
        res[i] *= rightprod;
        rightprod *= nums[i]
    }
    return res;
}

console.log(productArray([1,2,4,6]));

            