//数组去重
(function(){
	var newArr = new Array();
	var arrDraw = arrToDraw([1,3,6,[1,[2,3]],4,2],newArr);
	arrToHeavy(arrDraw);
})();

//多维数组打平
function arrToDraw(arr,newArr){

	for(var i = 0;i < arr.length;i++)
	{
		if(arr[i].length > 1)
			arrToDraw(arr[i],newArr);
		else
			newArr.push(arr[i]);
	}

	newArr.sort();  //数组重排序
	return newArr;
}

//去重
function arrToHeavy(arr){
	var array = new Array;
	array.push(arr[0]);

	for(var i = 1;i < arr.length;i++)
	{
		if(arr[i] != array[array.length-1])
			array.push(arr[i]);	
	}
	console.log(array);
	return array;
}


//二维数组打平
// function arrToDraw(arr){

// 	for(var i = 0;i < arr.length;i++)
// 	{
// 		if(arr[i].length > 1)
// 		{
// 			for(var j = 0;j < arr[i].length;j++)
// 				arr.push(arr[i][j]);  //将找到的嵌套数组push到原数组末尾
// 			arr.splice(i,1);   //剔除原数组中的嵌套数组
// 		}
			
// 	}

// 	arr.sort();  //数组重排序
// 	console.log(arr);
// 	return arr;
// }