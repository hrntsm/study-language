#include <iostream>
using namespace std;

void Kitty(){
    cout << "Kitty on your lap\n";
}

void Kitty(char *str){
    cout << str;
}

int main(){
    Kitty();
    Kitty("Di Gi Gharat\n");
    return 0;
}
