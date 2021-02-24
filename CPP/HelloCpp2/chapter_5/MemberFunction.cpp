#include <iostream>
using namespace std;

class Kitty{
public:
    char *str;
    void print(){
        cout << str;
    }
} obj;

int main(){
    obj.str = "Kitty on your lap";
    obj.print();
    return 0;
}
