#include<stdio.h>
void matricesMultiplication(int r1,int c1,int c2,int (*mat1)[c1],int (*mat2)[c2],int (*res)[c2]){
    for (int i=0;i<r1;i++)
    {
        for(int j=0;j<c2;j++)
        {   
            res[i][j]=0;
            for(int k=0;k<c1;k++)
            {
                res[i][j]+= (mat1[i][k]*mat2[k][j]);
            }
        }
    }
}
int main()
{   
    int r1,c1,r2,c2;
    printf("Enter the row and column of firts matrix: ");
    scanf("%d %d",&r1,&c1);
    printf("Enter the row and column of second matrix: ");
    scanf(" %d %d",&r2,&c2);
    int mat1[r1][c1];
    int mat2[r2][c2];
    int result[r1][c2];
    if(c1!=r2){
        printf("Error! The column of first matrix and row of second matrix must have to be equal\n");
        return 1;
    }
    
    printf("\nEnter the elements of the first matrix: \n");
    for (int i=0;i<r1;i++)
    {
        for(int j=0;j<c1;j++)
        {
            printf("Element [%d] [%d]= ",i,j);
            scanf("%d",&mat1[i][j]);
        }
    }
    printf("\nEnter the elements of the second matrix: \n");
    for (int i=0;i<r2;i++)
    {
        for(int j=0;j<c2;j++)
        {
            printf("Element [%d] [%d]= ",i,j);
            scanf("%d",&mat2[i][j]);
        }
    }

    matricesMultiplication(r1,c1,c2,mat1,mat2,result);

    printf("\nThe Resultant matrix of the Matrix Multiplicatio :  \n");
    for (int i=0;i<r1;i++)
    {
        for(int j=0;j<c2;j++)
        {
            printf("%d\t",result[i][j]);
        }
        printf("\n");
    }    
    return 0;
}