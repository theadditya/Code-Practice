//Write a program to display the sum of FIboncci series 
//sum=0+1+1+2+3+5+8+13+21
#include<stdio.h>
void fibonacci(int size,int *sum)
{   
    int arr[size];
    *sum = 0;
    for (int i=0;i<size;i++)
    {
    if(i==0)
    {
        arr[i]=0;
    }
    else if (i==1)
    {
        arr[i]=1;
    }
    else if (i>1)
    {
        arr[i]=arr[i-2]+arr[i-1];
    }
    }
    for(int i=0;i<size;i++)
    {
        (*sum)=(*sum)+arr[i];
    }

}
int main()
{
    int size,sum;
    printf("How many fibonacci terms you want to add :");
    scanf("%d",&size);
    fibonacci(size,&sum);
    printf("The sum of the fibonacci series till nth term is %d", sum);
    return 0;
}