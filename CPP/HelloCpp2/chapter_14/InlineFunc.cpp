#include <iostream>
using namespace std;

inline int func(int x){
    return x + (int)(x * 0.05);
}

int main(){
    cout << func(100);
    return 0;
}
