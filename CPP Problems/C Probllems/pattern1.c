//Pattern Printing
/*
A
A B
A B C
A B C D
*/
#include <stdio.h>
void pattern (int row);
int main()
{
    int row;
    printf("Give the row count: ");
    scanf("%d",&row);
    pattern(row);
    return 0;
}
void pattern (int row)
{
    for (int i=1;i<=row;i++)
    {
        for (int j = 0; j < i; j++)
        {
            char alpha=65+j;
            printf("%c ",alpha);
        }
        printf("\n");
    }
}