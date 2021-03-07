#include<iostream>
using namespace std;

void Kitty(char *str = "Kitty on your lap\n"){
    cout << str;
}

int main(){
    Kitty();
    Kitty("Di Gi Gharat\n");
    return 0;
}
