#include <stdio.h>
int add (int *x, int *y)
{
    int add = *x+*y;
    return add;
}
int main ()
{
    int a=10, b=4;
    int addition =add(&a,&b);
    printf("The Sum of %d & %d is %d",a,b,addition);
    return 0;
}

