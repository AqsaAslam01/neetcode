function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const mid = Math.floor((right + left)/ 2);
        if(target === arr[mid]) {
            return mid;
        } else if(target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([-1,0,2,4,6,8], 4))