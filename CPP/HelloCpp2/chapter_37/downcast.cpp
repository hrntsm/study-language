#include <iostream>
using namespace std;

class Kitty
{
public:
    virtual void func()
    {
        cout << "Kitty ou your lap\n";
    }
};

class Chobits : public Kitty
{
public:
    void func() {}
    void toString()
    {
        cout << "Chobits\n";
    }
} obj;

int main()
{
    Kitty *tmp = &obj;
    Chobits *po = dynamic_cast<Chobits *>(tmp);

    po->toString();
    return 0;
}