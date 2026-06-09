//Series Summation
/*
1+(2*2)+(3*3*3)+(4*4*4*4)+.......
*/
#include<stdio.h>
int series(int n)
{   
    int sum=0, product;
    for(int i=1;i<=n;i++)
    {   
        product=1;
        for(int j=1;j<=i;j++) 
        {
            product=product*i;
        }
        sum=sum+product;
    }
    return sum;
}
int main()
{
    int n;
    printf("Give the number: ");
    scanf("%d",&n);
    int sum=series(n);
    printf("The sum of the series is %d \n",sum);
    return 0;
}