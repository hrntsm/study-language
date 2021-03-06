#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
    Kitty() {str = "Kitty on your lap\n";}
    Kitty(const Kitty &obj){str = "Di Gi Gharat\n";}
} g_obj;

int main(){
    Kitty obj = g_obj;
    cout << g_obj.str;
    cout << obj.str;
    return 0;
}
