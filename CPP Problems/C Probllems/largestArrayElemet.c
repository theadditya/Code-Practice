//Lagest Array ELement by function
#include <stdio.h>
int largestElement(int arr[])
{   
    int largest =arr[0];
    for (int i=0;i<10;i++)
    {
        if(arr[i]>largest)
        {
            largest=arr[i];
        }
        else continue;
    }
    return largest;
}
int arrayInput(int arr[])
{
    for (int i=0;i<10;i++)
    {
        printf("arr[%d]= ",i);
        scanf("%d",&arr[i]);
    }
    return 0;
}
int main ()
{
    int arr[10];
    arrayInput(arr);
    int largest=largestElement(arr);
    printf("The largest number is %d\n",largest);
    return 0;
    
}