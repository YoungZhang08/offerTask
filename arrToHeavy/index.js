//数组去重
(function(){
	var arrSort = sort([1,3,2,2,1,6,4]);
	arrToHeavy(arrSort);
})();

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

//排序
function sort(arr)
{
	var tag = 1;
	for(var i = 0;(i < arr.length) && tag;i++)
	{
		tag = 0;
		for(var j = arr.length - 1;j >= i;j--)
		{
			var temp;
			if(arr[j] > arr[j+1])
			{
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				tag = 1;
			}
		}
	}
	return arr;
}