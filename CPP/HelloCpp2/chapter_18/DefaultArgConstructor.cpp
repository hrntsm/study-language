#include<iostream>
using namespace std;

void Kitty(char *str){
    cout << "name : " << str << '\n';
}

void Kitty(char *str, int age = 15){
    cout << "name : " << str << "\tage : " << age << '\n';
}

int main(){
    Kitty("Rena");
    return 0;
}
