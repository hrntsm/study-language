#include <iostream>

class Chobits
{
public:
    virtual void paint()
    {
        std::cout << "Chobits\n";
    }
} obj1;

class Di_Gi_Gharat : public Chobits
{
public:
    void paint()
    {
        std::cout << "Di Gi Gharat\n";
    }
} obj2;

int main()
{
    Chobits *po;
    unsigned char ch;

    std::cout << "ちぃ？ y/n >";
    std::cin >> ch;

    if (ch == 'y')
    {
        po = &obj1;
    }
    else
    {
        po = &obj2;
    }
    po->paint();

    return 0;
}
