//The number of charcters in your name 
#include<stdio.h>
int charCount(char name [])
{
    int count;
    for (int i=0;name[i]!='\0';i++)
    {
        count++;
    }
    return count;
}
void vowel(char name[],int size, int *vowel)
{
    (*vowel)=0;
    for (int i=0;i<size;i++)
    {

        if (name[i]=='a'||name[i]=='e'||name[i]=='i'||name[i]=='o'||name[i]=='u'||name[i]=='A'||name[i]=='E'||name[i]=='I'||name[i]=='O'||name[i]=='U')
        {
            (*vowel)++;
        }
    }

}
void consonant(char name[],int size,int *consonant)
{
    (*consonant)=0;
    for (int i=0;i<size;i++)
    {

        if ((name[i]>=65&&name[i]<=90)||(name[i]>=97&&name[i]<=122))
        {
            if (name[i]!='a'&&name[i]!='e'&&name[i]!='i'&&name[i]!='o'&&name[i]!='u'&&name[i]!='A'&&name[i]!='E'&&name[i]!='I'&&name[i]!='O'&&name[i]!='U')
            (*consonant)++;
        }
    }
}
int main()
{
    char name[20];
    printf("Give your name: ");
    scanf("%s",name);
    int count=charCount(name);
    printf("The number of characters in your name is %d\n",count);
    int vow;
    vowel(name,count,&vow);
    int cons;
    consonant(name,count,&cons);
    printf("The number of vowel is %d and cosonant is %d\n",vow,cons);
    return 0;
}