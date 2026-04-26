// Pattern Break in Middle 
/*
*
**
****  ---> 3rd row is actually missing and replaced with 4th row 
*****
*/
#include <stdio.h>
void patten (int row)
{
    for (int i=1;i<=row;i++)
    {   
        //Method -->1 //will skip the 3rd row fully 

        if(i==3) continue;
        else 
        for (int j=1;j<=i;j++)
        {   
            printf("* ");
        }
        printf("\n");



        //method -->2 //will not skip the 3rd row fully instead it w be printed with blank line 
        
        // for (int j=1;j<=i;j++)
        // {   
        //     if(i==3) continue;
        //     else 
        //     printf("* ");
        // }
        // printf("\n");
    }
}
int main ()
{
    int row;
    printf("Give the row count: ");
    scanf("%d",&row);
    patten(row);
    return 0;
}