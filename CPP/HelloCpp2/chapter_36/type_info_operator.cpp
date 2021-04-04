#include <iostream>
#include <typeinfo>
#include <stdlib.h>
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
    Kitty *po;
    srand((unsigned)time(NULL));

    if (rand() % 2)
        po = &obj1;
    else
        po = &obj2;

    if (typeid(obj1) == typeid(*po))
        cout << "Kitty on your lap\n";
    else
        cout << "Chobits\n";

    return 0;
}