#include <iostream>
using namespace std;

class Kitty{
public:
    char *str;
    void print(char *);
};

void Kitty::print(char *str) {
    cout << str << '\n';
    cout << Kitty::str << '\n';
}

int main(){
    Kitty obj;
    obj.str = "Kitty on your lap";
    obj.print("Di_Gi_Gharat");
    return  0;
}
