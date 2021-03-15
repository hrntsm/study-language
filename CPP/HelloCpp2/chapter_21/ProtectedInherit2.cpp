#include<iostream>
using namespace std;

class Base {
    char *str;
public:
    char *getStr(){return str;}
    char **getPo(){return &str;}
};

class Derived : protected Base{
public:
    void setStr(char *str) {
        char **po = getPo();
        *po = str;
    }
    void pritStr() { cout << getStr(); }
} obj;

int main(){
    obj.setStr("Kitty on your lap\n");
    obj.pritStr();
}
