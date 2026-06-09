//Reverse of a number
/*
num=23
reverse=32
*/
#include<stdio.h>
int reverse (int num)
{
    int rev=0;
    while(num!=0)
    {
        rev=(rev*10)+(num%10);
        num=num/10;
    }
    return rev;
}
int main()
{
    int num;
    printf("Give The Number: ");
    scanf("%d",&num);
    int rev= reverse(num);
    printf("The reverse of %d is %d\n",num,rev);
    return 0;
}