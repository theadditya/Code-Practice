#include <stdio.h>

// Function Prototype
void multiplyMatrices(int r1, int c1, int c2, int (*A)[c1], int (*B)[c2], int (*res)[c2]);

int main() {
    int r1, c1, r2, c2;

    printf("Enter rows and columns for Matrix A: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter rows and columns for Matrix B: ");
    scanf("%d %d", &r2, &c2);

    // 1. Check if multiplication is possible
    if (c1 != r2) {
        printf("\nError! Columns of A must match rows of B.\n");
        return 1;
    }

    int A[r1][c1], B[r2][c2], res[r1][c2];

    printf("\nEnter elements of Matrix A:\n");
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c1; j++)
            scanf("%d", &A[i][j]);

    printf("\nEnter elements of Matrix B:\n");
    for (int i = 0; i < r2; i++)
        for (int j = 0; j < c2; j++)
            scanf("%d", &B[i][j]);

    // 2. Call by reference
    multiplyMatrices(r1, c1, c2, A, B, res);

    // 3. Output result
    printf("\nProduct Matrix:\n");
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            printf("%d\t", res[i][j]);
        }
        printf("\n");
    }

    return 0;
}

// Function Definition
void multiplyMatrices(int r1, int c1, int c2, int (*A)[c1], int (*B)[c2], int (*res)[c2]) {
    // Initialize result matrix with zeros
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            res[i][j] = 0;
            // Dot product of row i from A and column j from B
            for (int k = 0; k < c1; k++) {
                res[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}