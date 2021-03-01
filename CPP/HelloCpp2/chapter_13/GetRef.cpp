#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
};

void setKitty(Kitty &obj, char *str){
    obj.str = str;
}

int main(){
    Kitty obj;
    setKitty(obj, "Kitty on your lap");
    cout << obj.str;
    return 0;
}
