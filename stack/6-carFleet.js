function carFleet(target, position, speed) {
    let pairs = position.map((p, i) => [p, speed[i]]);
    pairs.sort((a, b) => b[0] - a[0]);
    let stack = [];

    for(let [p, s] of pairs) {
        stack.push((target - p) / s);

        if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }
    return stack.length;
}

console.log(carFleet(10, [4,1,0,7], [2,2,1,1]));