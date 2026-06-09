#include <stdio.h>

int main() {
    int n, i, j;
    int primarySum = 0, secondarySum = 0;

    printf("Enter the size of the square matrix (N x N): ");
    scanf("%d", &n);

    int matrix[n][n];

    // 1. Input matrix elements
    printf("Enter elements of the matrix:\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    // 2. Logic to calculate sums
    for (i = 0; i < n; i++) {
        // Primary Diagonal: row index == column index
        primarySum += matrix[i][i];

        // Secondary Diagonal: column index is (n - 1 - row index)
        secondarySum += matrix[i][n - 1 - i];
    }


    printf("\nSum of Primary Diagonal: %d", primarySum);
    printf("\nSum of Secondary Diagonal: %d\n", secondarySum);

    return 0;
}