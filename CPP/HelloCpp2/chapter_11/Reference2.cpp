#include <iostream>
using namespace std;

class Kitty{
public:
    char *str;
} obj;

int main(){
    Kitty &ref = obj;
    ref.str = "Kitty on your lap";

    cout << obj.str;
    return 0;
}
