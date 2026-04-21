#include <stdio.h>
int main()
{
    int a=10,b=5;
    printf("The value of a= %d & The value of b=%d",a,b);
    change(a,b);
    printf("\nNow the value of a= %d & The value of b=%d",a,b);    
    swap(&a,&b);
    printf("\nNow the value of a= %d & The value of b=%d",a,b);
    return 0;
}
int change(int a,int b)// call by Value
{
    a=a+b;
    b=a-b;
    a=a-b;
    return 0;
}
int swap(int *a,int *b) //call by reference
{
    *a=*a+*b;
    *b=*a-*b;
    *a=*a-*b;
    return 0;
}