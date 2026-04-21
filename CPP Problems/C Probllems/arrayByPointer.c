#include <stdio.h>
int main ()
{
    int a[4]={1,2,3,4}, i;
    int* ptr;
    ptr= &a;
    for (i=0;i<4;i++)
    {
        printf("a[%d]= %d", i,*(ptr++));//*(ptr+i)

    }
    return 0;
}