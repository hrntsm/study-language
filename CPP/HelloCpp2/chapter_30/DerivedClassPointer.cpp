#include <iostream>

class Base
{
public:
    char *str;
};

class Derived : public Base
{
public:
    int i;
} obj;

int main()
{
    obj.str = "Kitty on your lap\n";

    Base *po = &obj;
    std::cout << po->str;

    return 0;
}
