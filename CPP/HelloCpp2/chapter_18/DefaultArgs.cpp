#include<iostream>
using namespace std;

void Kitty(char *str="Rena", int age = 15){
    cout << "name : " << str << "\tage : " << age << '\n';
}

int main(){
    Kitty();
    Kitty("Yuki");
    Kitty("Sakura", 11);
    return 0;
}
