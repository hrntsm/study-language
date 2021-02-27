#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
    Kitty(char *);
};

Kitty::Kitty(char *str) {
    Kitty::str = str;
}

int main(){
    Kitty *po;
    Kitty obj[2] = {
            "Kitty on your lap\n",
            "Di_Gi_Gharat\n"
    };
    po = &obj[0];

    cout << po->str;
    cout << (po+1)->str;

    return 0;
}
