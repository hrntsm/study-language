#include <iostream>

class Kitty
{
public:
    virtual void paint()
    {
        std::cout << "Kitty on your lap\n";
    }
} obj;

class Chobits : public Kitty
{
public:
    void paint()
    {
        std::cout << "Chobits\n";
    }
} obj2;

class Di_Gi_Gharat : public Chobits
{
public:
    void paint()
    {
        std::cout << "Di Gi Gharat\n";
    }
} obj3;

int main()
{
    Kitty *po1 = &obj, *po2 = &obj2, *po3 = &obj3;

    po1->paint();
    po2->paint();
    po3->paint();

    return 0;
}
