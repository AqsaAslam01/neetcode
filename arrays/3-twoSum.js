
function twoSum(arr, target) {
    const map = new Map();

    for(let i=0; i<arr.length; i++) {
        const x = target - arr[i];
        if (map.has(x)) {
            return [map.get(x), i];
        }
        map.set(arr[i], i);
    }
}

console.log(twoSum([1,2,4,3,5], 9));