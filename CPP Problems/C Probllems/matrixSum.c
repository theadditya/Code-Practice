#include <stdio.h>

// Function Prototype
void sumMatrices(int r, int c, int (*mat1)[c], int (*mat2)[c], int (*res)[c]);

int main() {
    int r, c;

    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);

    int a[r][c], b[r][c], sum[r][c];

    // Input first matrix
    printf("\nEnter elements of Matrix A:\n");
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);

    // Input second matrix
    printf("\nEnter elements of Matrix B:\n");
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &b[i][j]);

    // Call by reference: passing the array names (which act as pointers)
    sumMatrices(r, c, a, b, sum);

    // Output the result
    printf("\nSum of Matrices (A + B):\n");
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            printf("%d\t", sum[i][j]);
        }
        printf("\n");
    }

    return 0;
}

// Function Definition
// Using pointer to an array of 'c' integers to handle 2D indexing
void sumMatrices(int r, int c, int (*mat1)[c], int (*mat2)[c], int (*res)[c]) {
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            // Accessing elements via reference and storing in result matrix
            res[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
}