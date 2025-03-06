function search2D(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        let num = matrix[row][col];

        if(target === num) {
            return true;
        } else if(target > num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

console.log(search2D([[1,2,4,8],[10,11,12,13],[14,20,30,40]],10));