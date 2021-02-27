#include <iostream>
using namespace std;

class Kitty{
public:
    char *str;
} obj;

int main(){
    obj.str = "Di_Gi_Gharat";
    Kitty *po = &obj;
    po->str = "Kitty on your lap";

    cout << obj.str;

    return 0;
};
