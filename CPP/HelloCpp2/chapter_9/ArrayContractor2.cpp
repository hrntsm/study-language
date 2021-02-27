#include <iostream>
using namespace std;

class Kitty{
public:
    Kitty(char*);
};

Kitty::Kitty(char *str) {
     cout << str << '\n';
}

int main(){
    Kitty obj[3] = {
        "Kitty on your lap",
        "CC sakura",
        "Di_Gi_Gharat"
    };
    return 0;
}
