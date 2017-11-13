#include<stdio.h>
#include<string.h>

void replaceSpace(char str[],int length)
{
		int i = 0; 
	    int tag = 0;     //记录空格数量的变量,初始化为0
        int oldlen = 0;  //暂存原始字符串的长度
        int newlen;      //暂存新的长度值
		int newpos,oldpos;

        if (str == NULL || length <= 0)
            return;

        while(str[i] != '\0'){
			++oldlen;
            if (str[i] == ' ')
                tag++;
			i++;
        }

        newlen=oldlen + tag*2; //最后的字符串长度增加为原来的长度加空格数*2
	
		if(newlen > length)
			return;
		
        newpos=newlen; //新字符串的指针
		oldpos=oldlen;
        while(newpos > oldpos && oldpos >= 0){
            if (str[oldpos] == ' ') {
                str[newpos--] = '0';
                str[newpos--] = '2';
                str[newpos--] = '%';
            } else {
                str[newpos--] = str[oldpos];
            }
			--oldlen;
        }
}

void main()
{
	char str[] = "We Are Happy.";
	replaceSpace(str,18);
}