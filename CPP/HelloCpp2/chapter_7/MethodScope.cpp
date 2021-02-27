#include <iostream>
using namespace std;

void function(){
    cout << "Di_Gi_Gharat\n";
}

class Kitty{
private:
    void function();
public:
    Kitty();
} obj;

Kitty::Kitty(){
    ::function();
    Kitty::function();
}

void Kitty::function() {
    cout << "Kitty on your lap\n";
}

int main(){
    return 0;
}
