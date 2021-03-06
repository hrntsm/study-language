#include <iostream>
using namespace std;

class Kitty {
public:
    Kitty(){cout << "Kitty on your lap\n";}
    Kitty(const Kitty &obj){cout << "Di Gi Gharat\n";}
};

Kitty getKitty(Kitty obj){
    return obj;
}

int main(){
    Kitty obj;
    obj = getKitty(obj);
    return 0;
}
