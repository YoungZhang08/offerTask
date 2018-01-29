function jumpFloorII(number)
{
    // write code here
    if(number === 0)
        return 0;
    else if(number === 1)
        return 1;
    else if(number === 2)
        return 2;
    else{
        console.log(Math.pow(2,number - 1));
        return Math.pow(2,number - 1);
    }
    
}

jumpFloorII(6);