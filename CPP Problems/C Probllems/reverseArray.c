#include <stdio.h>

int main() {
    int arr[100], n, i, temp;

    // 1. Input size and elements
    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // 2. Reverse Logic (Two-Pointer Swap)
    // We only need to loop up to n/2
    for(i = 0; i < n / 2; i++) {
        temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }

    // 3. Output the reversed array
    printf("\nReversed array: ");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}