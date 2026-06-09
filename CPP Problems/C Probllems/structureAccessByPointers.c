#include<stdio.h>
struct DOB{
    int date;
    int month;
    int year;
};
struct student {
    char name[100];
    int roll_no;
    struct DOB dob;
};
int main()
{
    struct student s1;
    struct student *ptr;
    ptr=&s1;
    printf("Enter the name: ");
    fgets(ptr->name,sizeof(ptr->name),stdin);
    printf("Enter Roll No: ");
    scanf("%d",&ptr->roll_no);
    printf("Enter DOB (DD MM YYYY): ");
    scanf("%d %d %d",&ptr->dob.date,&ptr->dob.month,&ptr->dob.year);

    printf("\n\n---Displaying Student Details---\n");
    printf("Name:\t\t%s\n",ptr->name);
    printf("Roll No:\t\t%d\n",ptr->roll_no);
    printf("Date Of Birth:\t\t%d-%d-%d\n",ptr->dob.date,ptr->dob.month,ptr->dob.year);
    return 0;    
}