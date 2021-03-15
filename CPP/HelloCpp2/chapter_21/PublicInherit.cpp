#include<iostream>
using namespace std;

class Base {
public:
    char *str;
};

class Derived : public Base {
public:
    void printStr() {cout << str;}
} obj;

int main() {
    obj.str = "Kitty on your lap.";
    obj.printStr();
    return 0;
}
