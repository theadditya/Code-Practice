#include <stdio.h>

int main() {
    int arr[100], n, i, j, temp;

    // 1. Input array size
    printf("Enter number of elements: ");
    scanf("%d", &n);

    // 2. Input array elements
    printf("Enter %d integers:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // 3. Bubble Sort Logic
    for (i = 0; i < n - 1; i++) {       // Loop for number of passes
        for (j = 0; j < n - i - 1; j++) { // Loop for comparisons
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // 4. Output the sorted array
    printf("\nSorted array in ascending order:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}