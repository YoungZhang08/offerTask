#include<stdio.h>
#include<string.h>

void replaceSpace(char str[],int length)
{
		int i = 0; 
	    int tag = 0;     //��¼�ո������ı���,��ʼ��Ϊ0
        int oldlen = 0;  //�ݴ�ԭʼ�ַ����ĳ���
        int newlen;      //�ݴ��µĳ���ֵ
		int newpos,oldpos;

        if (str == NULL || length <= 0)
            return;

        while(str[i] != '\0'){
			++oldlen;
            if (str[i] == ' ')
                tag++;
			i++;
        }

        newlen=oldlen + tag*2; //�����ַ�����������Ϊԭ���ĳ��ȼӿո���*2
	
		if(newlen > length)
			return;
		
        newpos=newlen; //���ַ�����ָ��
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