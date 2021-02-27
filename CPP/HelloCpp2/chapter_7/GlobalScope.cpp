#include <iostream>
using namespace std;

char *str = "Kitty on your lap\n";

int main(){
    char *str = "CC Sakura\n";

    cout << str;
    cout << ::str;
    return 0;
}
