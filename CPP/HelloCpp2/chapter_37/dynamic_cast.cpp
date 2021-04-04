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
    void func()
    {
        cout << "Chobits\n";
    }
} obj;

int main()
{
    Kitty *po = dynamic_cast<Kitty *>(&obj);
    po->func();
    return 0;
}