#include <iostream>
using namespace std;

class Kitty{
public:
    Kitty(bool, char*);
};

Kitty::Kitty(bool bo, char *str) {
    if (bo){
        cout << str << '\n';
    }
}

int main(){
    Kitty obj[3] = {
        Kitty(true, "Kitty on your lap"),
        Kitty(true, "CC sakura"),
        Kitty(true, "Di_Gi_Gharat")
    };
    return 0;
}
