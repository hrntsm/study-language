#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
    Kitty(){
        this->str = "Kitty on your lap\n";
    }
    Kitty(char *str){
        this->str = str;
    }
} obj, ary[3] = {"Di Gi Gharat\n", "CC Sakura\n", "Love Hina\n"};

int main(){
    cout << obj.str;
    Kitty *objPointer = &ary[0];
    for (int i = 0; i < 3; i++)
    {
        cout << objPointer++->str;
    }
    return 0;
}
