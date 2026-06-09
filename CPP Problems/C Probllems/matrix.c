#include <stdio.h>

int main() {
    int rows, cols, i, j;

    // 1. Input dimensions
    printf("Enter number of rows: ");
    scanf("%d", &rows);
    printf("Enter number of columns: ");
    scanf("%d", &cols);

    int matrix[rows][cols];

    // 2. Input array elements
    printf("\nEnter elements for a %dx%d matrix:\n", rows, cols);
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    // 3. Print the 2D array in grid format
    printf("\nThe 2D Array is:\n");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("%d\t", matrix[i][j]); // \t adds a tab space for alignment
        }
        printf("\n"); // New line after each row
    }

    return 0;
}