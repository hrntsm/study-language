#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
    ~Kitty();
};

Kitty::~Kitty() {
    cout << "aaaaaaaaa \n";
}

Kitty getKitty(char *str){
    Kitty obj;
    obj.str = str;
    return obj;
}

int main(){
    Kitty obj = getKitty("Kitty on your lap\n");
    cout << obj.str;
    return 0;
}
