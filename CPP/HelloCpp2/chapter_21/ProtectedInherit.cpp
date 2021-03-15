#include<iostream>
using namespace std;

class Base {
protected:
    char *str;
};

class Derived : public Base{
public:
    void setStr(char *str) {this->str = str;}
    void pritStr() { cout << str; }
} obj;

int main(){
    obj.setStr("Kitty on your lap\n");
    obj.pritStr();
}
