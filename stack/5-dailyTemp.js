function dailyTemp(temperatures) {
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    const stack = [];

    for(let i = 0; i < n; i++) {
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
            const preIndex = stack.pop();
            res[preIndex] = i - preIndex;
        }
        stack.push(i);
    }
    return res;
}

console.log(dailyTemp([30,38,30,36,35,40,28]));