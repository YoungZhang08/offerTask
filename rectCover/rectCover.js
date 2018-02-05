function rectCover(number)
{
    var temp_1 = 2;
    var temp_2 = 3;
    var temp = 0;
    if(number <= 3) {
        return number;
    }
    for(var i = 4; i = number; i++) {
        temp = temp_1 + temp_2;
        temp_1 = temp_2;
        temp_2 = temp;
    }
    return temp;
}