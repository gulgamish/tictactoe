

const checkLine = (board, player) => {
    var win = [];

    for (var row of board) {
        for (var item of row) {
            if (item === player)
                win.push(item);
        }
        if (win.length === 3)
            return true;
        win = [];
    }
}

const checkColumn = (board, player) => {
    var win = [];

    for (var i = 0; i < 3; i++) {
        for (var row of board) {
            if (row[i] === player)
                win.push(row[i]);
        }
        if (win.length === 3)
            return true;
        win = [];
    }
}

const checkDiagonalEnd = (board, player) => {
    var win = [];
    var j = 0;

    for (var i = 2; i >= 0; i--) {
        if (board[j][i] === player)
            win.push(board[0][i]);
        j++;
    }
    if (win.length === 3)
        return true;
    return false;
}

const checkDiagonalStart = (board, player) => {
    var win = [];

    for (var i = 0; i < 3; i++) {
        if (board[i][i] === player)
            win.push(board[i][i]);
    }
    if (win.length === 3)
        return true;
    return false;
}

export default function(board, player) {
    return checkLine(board, player) || checkColumn(board, player) || checkDiagonalEnd(board, player) || checkDiagonalStart(board, player);
}