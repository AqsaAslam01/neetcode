
function containDuplicates(arr) {
    const seen = new Set();
    for(let num of arr) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

console.log(containDuplicates([1,2,4,3,5]));