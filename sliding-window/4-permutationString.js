function permutationString(s1, s2) {
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);

    for(let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    function match(arr1, arr2) {
        return arr1.every((val, index) => val === arr2[index]);
    }
    if(match(s1Count, s2Count)) return true;

    for(let i = s1.length; i < s2.length; i++) {
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
    if(match(s1Count, s2Count)) return true;
    }
    return false;
}

console.log(permutationString("abc", "lecabee"));