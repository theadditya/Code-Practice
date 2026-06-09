#include <stdio.h>
int main ()
{
    int n,i;
    int a=0,b=1,next,sum=0;
    printf("Enter the numberer of elements of fibonacci seies : ");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        printf("%d \t",a);
        sum=sum+a;
        next=a+b;
        a=b;
        b=next;
    }
    printf("\nThe sum of the Fibonacci series till %d term is : %d \n \n",n,sum);
    return 0;
}