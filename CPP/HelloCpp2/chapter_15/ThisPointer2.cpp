#include <iostream>
using namespace std;

class Kitty {
public:
    char *str;
    Kitty(char*);
    void call();
} obj[3] = {"Kitty on your lap\n", "Di Gi Gharat\n", "CC Sakura\n"};

Kitty::Kitty(char *str){
    this->str = str;
}

void print(Kitty *obj){
    cout << obj->str;
}

void Kitty::call(){
    print(this);
}

int main(){
    Kitty *obp = &obj[0];
    for (int i = 0; i < 3; i++)
    {
        obp->call();
        obp++;
    }
    return 0;
}
