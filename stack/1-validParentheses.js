function isValid(s) {
    const stack = [];
    const match = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for(let c of s) {
        if(c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else if(c === ')' || c === '}' || c === ']') {
            if(stack.pop() !== match[c]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid('([{}])'));