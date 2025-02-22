function trappingWater(heights) {
    let left = 0;
    let right = heights.length-1;
    let leftMax = heights[left];
    let rightMax = heights[right];
    let res = 0;

    while(left < right) {
        if(heights[left] < heights[right]) {
            left++;
            leftMax = Math.max(leftMax, heights[left]);
            res += leftMax - heights[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, heights[right]);
            res += rightMax - heights[right];
        }
    }
    return res;
}

console.log(trappingWater([0,2,0,3,1,0,1,3,2,1]));

