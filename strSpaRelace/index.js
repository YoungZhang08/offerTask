(function() {
    function replaceSpace(str) {
        var tag = 0; //记录空格数量的变量,初始化为0
        var oldLen = str.length; //暂存原始字符串的长度
        console.log('旧字符串长度为：' + oldLen);
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
        console.log(arr);

        newLen = oldLen + tag * 2; //最后的字符串长度增加为原来的长度加空格数*2
        console.log('新字符串的长度：' + newLen);

        var newPos = newLen - 1; //新字符串的指针
        var j = 1;

        for (var oldPos = oldLen - 1; oldPos >= arr[0] && newPos > oldPos; --oldPos) {
            console.log('第' + j + '次旧字符串指针指向下标' + oldPos);
            if (str[oldPos] == ' ') {
                str[newPos--] = '0';
                str[newPos--] = '2';
                str[newPos--] = '%';
            } else {
                console.log('新字符串指针指向' + newPos);
                str[newPos--] = str[oldPos];
                console.log(str[newPos]);
            }
            j++;
        }

        for (var j = 0; j < newLen; j++)
            console.log(str[j]);
    }

    replaceSpace("We Are Happy.");
})();