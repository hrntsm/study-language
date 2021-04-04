#include <iostream>
#include <typeinfo>
using namespace std;

class Kitty
{
public:
    virtual void func(){};
} obj1;

class Chobits : public Kitty
{
public:
    void func() {}
} obj2;

int main()
{
    Kitty *po = &obj1;
    cout << "Class type = " << typeid(*po).name() << '\n';
    po = &obj2;
    cout << "Class type = " << typeid(*po).name() << '\n';
    return 0;
}