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

void getRef(Base &obj)
{
    std::cout << obj.str;
}

int main()
{
    obj.str = "Kitty on your lap\n";
    getRef(obj);
    return 0;
}
