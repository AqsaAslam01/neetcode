
function validSudoku(board) {
    const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            const num = board[r][c];
            if(num === '.') continue;
            let index = Math.floor(r/3) * 3 + Math.floor(c/3);

            if(rows[r].has(num) || cols[c].has(num) || boxes[index].has(num)) {
                return false;
            }
            rows[r].add(num);
            cols[c].add(num);
            boxes[index].add(num);
        }
    }
    return true;

}

console.log(validSudoku([["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]))