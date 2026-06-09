#include <stdio.h>

int main() {
    int num = 42;          // A regular integer variable
    int *ptr;              // A pointer variable (stores addresses of integers)

    // Assign the address of 'num' to 'ptr'
    ptr = &num;

    printf("Value of the variable: %d\n", num);
    
    // Printing addresses
    printf("Address of 'num' (using & operator): %p\n", &num);
    printf("Address of 'num' (using pointer 'ptr'): %p\n", ptr);
    
    // Demonstrating the pointer's own address
    printf("Address of the pointer 'ptr' itself: %p\n", &ptr);

    return 0;
}