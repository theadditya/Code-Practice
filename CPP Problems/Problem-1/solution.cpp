#include <iostream>
#include <string>
using namespace std;

string even(int num){
    string result=(num>2 && num<=100 && num%2==0) ?  "YES"  : "NO" ;
    return result;
}

int main(){
    int num;
    // cout << "Give the Weight (0<w<100) : "; //Have to ignore this lie i the time of testing 
    cin >> num;
    string result = even (num);
    cout << result << endl;
    return 0;
}