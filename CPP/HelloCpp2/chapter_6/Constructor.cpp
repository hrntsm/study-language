#include <iostream>
using namespace std;

class Kitty {
public:
    Kitty();
} obj;

Kitty::Kitty() {
    cout<<"Kitty on your lap\n";
}

int main() {
    Kitty obj;
    return 0;
}
