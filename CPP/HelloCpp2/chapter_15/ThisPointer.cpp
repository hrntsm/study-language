#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
    Kitty(char *str) {
        this->str = str;
    }
    void func(){
        cout << this->str;
    }
} obj[3] = { "Kitty on your lap\n", "Di Gi Gharat\n", "CC Sakura\n" };

int main(){
    for (int i = 0; i < 3; i++)
    {
        obj[i].func();
    }
    
    return 0;
}
