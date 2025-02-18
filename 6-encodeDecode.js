function encode(arr) {
    let res = '';
    for(let s of arr) {
        res += s.length + '#' + s;
    }
    return res;
}
const arr = ['i', 'am', 'aqsa'];

function decode(str) {
    let res = [];
    let i=0;
    while(i<str.length){
        let j=i;
        while(str[j] !== '#'){
            j++;
        }
        const length = parseInt(str.substring(i,j));
        i=j+1;
        j=i+length;
        res.push(str.substring(i,j));
        i=j;
    }
    return res;
}
console.log(encode(arr));
let str = encode(arr);
console.log(decode(str));