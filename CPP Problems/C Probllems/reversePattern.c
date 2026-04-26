//reverse Patter 
/*
GIVE THE ROW COUNT :4
****
***
**
*
*/
#include<stdio.h>
void pattern (int row)
{
    for (int i=1;i<=row;i++)
    {
        for (int j = row; j >=i; j--)
        {
            printf("* ");

        }
        printf("\n");
    }
}
int main ()
{
    int row;
    printf("GIIVE THE ROW COUNT: ");
    scanf("%d",&row);;
    pattern (row);
    return 0;
}