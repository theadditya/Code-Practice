#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr;

    // Point ptr to the first element of the array
    ptr = arr; // Equivalent to ptr = &arr[0]

    printf("Displaying array elements using pointers:\n\n");
    printf("Address\t\tValue\n");
    printf("---------------------------\n");

    for (int i = 0; i < 5; i++) {
        // *(ptr + i) accesses the value at the address (ptr + i)
        printf("%p\t%d\n", (void*)(ptr + i), *(ptr + i));
    }

    return 0;
}