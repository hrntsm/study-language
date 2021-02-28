#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
    ~Kitty();
} obj;

Kitty::~Kitty(){
    cout << str << '\n';
}

void func(Kitty *obj){
    obj->str = "Di Gi Gharat";
}

int main(){
    obj.str = "Kitty on your lap";
    func(&obj);
    return 0;
}
