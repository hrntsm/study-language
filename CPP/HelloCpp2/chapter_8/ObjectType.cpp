#include <iostream>
using namespace std;

class Kitty {
public:
    int i;
    Kitty(int);
} p_obj(5);

Kitty::Kitty(int i) {
    Kitty::i = i;
}
int main(){
    Kitty obj(10);
    cout << obj.i << '\n';

    obj = p_obj;

    cout << obj.i;
    return 0;
}
