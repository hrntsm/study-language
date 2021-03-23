#include <iostream>

class Base
{
public:
    void paint()
    {
        std::cout << "Kitty on your lap\n";
    };
};

class Derived : public Base
{
public:
    void paint()
    {
        std::cout << "Di Gi Gharat\n";
    }
} obj;

int main()
{
    Base *po = &obj;
    obj.paint();
    po->paint();

    return 0;
}
