#include <stdio.h>

int main() {
    char str[100];
    char *ptr;

    printf("Enter a string: ");
    // Reads string including spaces
    fgets(str, sizeof(str), stdin);

    // Point ptr to the start of the string
    ptr = str;

    printf("The string entered is: ");

    // Loop until the pointer hits the null terminator '\0'
    while (*ptr != '\0') {
        printf("%c", *ptr); // Print the character at the current address
        ptr++;              // Move to the next memory address
    }

    return 0;
}