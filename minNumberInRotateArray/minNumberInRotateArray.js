function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length === 0) 
        return 0;
    var p1 = 0;
    var p2 = rotateArray.length-1;
    var mid = p1;
    while(rotateArray[p1] >= rotateArray[p2]) {
        if((p2-p1)==1){
            mid = p2;
            break;
        }
        var mid = Math.floor((p1+p2)/2);
        if(rotateArray[p1] <= rotateArray[mid]) {
            p1 = mid;
        }else if(rotateArray[p2] >= rotateArray[mid]) {
            p2 = mid;
        }
    }
    console.log(rotateArray[mid]);
    return rotateArray[mid];
}

minNumberInRotateArray([6501,6828,6963,7036,7422,7674,8146,8468,8704,8717,9170,9359,9719,9895,9896,9913,9962,154,293,334,492,1323,1479,1539,1727,1870,1943,2383,2392,2996,3282,3812,3903,4465,4605,4665,4772,4828,5142,5437,5448,5668,5706,5725,6300,6335]);