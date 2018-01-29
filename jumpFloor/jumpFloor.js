function jumpFloor(number)
{
    // write code here
    var num = 0;
    var num_1 = 2;
    var num_2 = 3;
    if(number <= 3){
        return number;
    }
    for(var i = 4; i <= number; i++){
        num = (number - 1) + (number - 2);
        
        num_1 = num_2;
        num_2 = num;
    }
    console.log(num);
    return num;     
}

jumpFloor(6);