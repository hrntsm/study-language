#include <iostream>

class Base
{
public:
    virtual void paint() = 0;
};

class Kitty : public Base
{
public:
    void paint()
    {
        std::cout << "Kitty on your lap\n";
    }
} obj1;

class Love : public Base
{
public:
    void paint()
    {
        std::cout << "Love Hina\n";
    }
} obj2;

int main()
{
    Base *po1 = &obj1, *po2 = &obj2;

    po1->paint();
    po2->paint();

    return 0;
}
