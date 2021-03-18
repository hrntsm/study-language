#include <iostream>
using namespace std;

class Neko
{
public:
    Neko()
    {
        cout << "A house cat\n";
    }
};

class Kitty : public Neko
{
public:
    Kitty()
    {
        cout << "Kitty on your lap\n";
    }
};

class Zoo : public Kitty
{
public:
    Zoo()
    {
        cout << "Nekonwko Zoo\n";
    }
} obj;

int main()
{
    return 0;
}
