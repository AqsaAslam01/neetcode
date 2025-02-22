function containerWithMostWater(heights) {
    let left = 0;
    let right = heights.length-1;
    let res = 0;

    while(left < right) {
        const area = Math.min(heights[left], heights[right]) * (right-left);
        res = Math.max(area, res);
        if(heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
}

console.groupCollapsed(containerWithMostWater([1,7,2,5,4,7,3,6]))