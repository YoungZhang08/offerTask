//斐波那契数列
(function(){
	Fibonacci(100);
})();

function Fibonacci(n)
{
	var fibNum_1 = 0;
	var fibNum_2 = 1;
	var fibNum = 0;
	if(n < 2)
		return n;
	
	for(var i = 2;i <= n;i++)
	{
		fibNum = fibNum_1 + fibNum_2;

		fibNum_1 = fibNum_2;
		fibNum_2 = fibNum;
	}
	// console.log(fibNum);
	return fibNum;
}