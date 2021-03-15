#include <iostream>
using namespace std;

class Base {
    char *str;
};

class Derived : public Base {
public:
    void printStr(){ cout << str;}
} obj;

int main(){
    obj.printStr();
    return 0;
}
