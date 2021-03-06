#include <iostream>
using namespace std;

void Kitty(double x){
    cout << "double :" << x << '\n';
}

void Kitty(float x){
    cout << "float  :" << x << '\n';
}

int main(){
    Kitty((float)10);
    return 0;
}
