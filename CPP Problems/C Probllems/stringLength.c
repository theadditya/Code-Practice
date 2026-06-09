#include <stdio.h>

int main()
{
    char str[100];
    char *ptr;
    int length = 0;

    // Input string
    printf("Enter a string: ");
    gets(str);

    // Assign pointer to string
    ptr = str;

    // Count length using pointer
    while(*ptr != '\0')
    {
        length++;
        ptr++;
    }

    // Display length
    printf("Length of string = %d\n\n", length);

    return 0;
}