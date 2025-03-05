function histogram(heights) {
    const n = heights.length;
    const stack = [];
    let maxArea = 0;

    for(let i = 0; i <= n; i++) {
        while(stack.length && (i === n || heights[stack[stack.length - 1]] >= heights[i])) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}

console.log(histogram([7,1,7,2,2,4]));