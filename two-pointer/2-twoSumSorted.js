function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while(left < right) {
        const sum = numbers[left] + numbers[right];
        if(sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left+1, right+1];
        }
    }
    return [];
}

console.log(twoSum([1,2,3,4], 6));