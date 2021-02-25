#include <iostream>
using namespace std;

class Kitty{
public:
    ~Kitty();
};

Kitty::~Kitty() {
    cout<<"Kitty on your lap\n";
}

void createKitty(){
    Kitty obj;
}

int main(){
    createKitty();
    createKitty();
    return 0;
}
