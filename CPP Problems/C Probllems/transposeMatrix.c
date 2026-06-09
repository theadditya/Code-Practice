#include <stdio.h>

int main() {
    int r, c, i, j;

    // 1. Input dimensions
    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    int matrix[r][c], transpose[c][r];

    // 2. Input matrix elements
    printf("\nEnter elements of the matrix:\n");
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    // 3. Logic for Transpose
    // Row becomes column and column becomes row
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    // 4. Output the result
    printf("\nTranspose of the Matrix:\n");
    for (i = 0; i < c; i++) {
        for (j = 0; j < r; j++) {
            printf("%d\t", transpose[i][j]);
        }
        printf("\n");
    }

    return 0;
}