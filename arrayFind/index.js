(function() {

    function Find(target, arr) {
        var rows = arr.length; //行
        var columns = arr[0].length; //列
        var found = false;
        var row = 0;
        var column = columns - 1;
        while (row < rows && columns >= 0) {
            if (arr[row][column] == target) {
                found = true;
                return found;
            } else if (arr[row][column] > target) {
                --column;
            } else {
                ++row;
            }
        }
        return found;
    }

    Find(7, [
        [1, 3, 5, 7, 9],
        [2, 4, 6, 8, 10],
        [3, 5, 7, 9, 10],
        [4, 6, 8, 10, 12],
        [5, 7, 9, 11, 13]
    ]);
})();