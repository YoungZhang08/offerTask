(function() {
    function replaceSpace(str) {
        var tag = 0; //记录空格数量的变量,初始化为0
        var oldLen = str.length; //暂存原始字符串的长度
        var newLen; //暂存新的长度值

        if (str == '' || str.length <= 0)
            return;

        var arr = [];
        for (var i = 0; i < oldLen; i++) {
            if (str[i] == ' ') {
                arr.push(i);
                tag++;
            }
        }

        newLen = oldLen + tag * 2; //最后的字符串长度增加为原来的长度加空格数*2
        var newStr = new Array(newLen);
        var newPos = newLen - 1; //新字符串的指针

        for (var oldPos = oldLen - 1; oldPos >= arr[0]; --oldPos) {
            if (str[oldPos] == ' ') {
                newStr[newPos--] = '0';
                newStr[newPos--] = '2';
                newStr[newPos--] = '%';
            } else {
                newStr[newPos--] = str[oldPos];
            }
        }
        for (var k = 0; k < arr[0]; k++)
            newStr[k] = str[k];
        newStr = newStr.join('');
        console.log(newStr);
    }

    replaceSpace("We Are Happy ");
})();