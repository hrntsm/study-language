#include <iostream>
using namespace std;

class Neko
{
public:
    Neko(char *str)
    {
        cout << str;
    }
};

class Kitty
{
public:
    Kitty(char *str)
    {
        cout << str;
    }
};

class Zoo : public Kitty, public Neko
{
public:
    Zoo(char *base1, char *base2): Kitty(base1), Neko(base2)
    {
        cout << "Nekonwko Zoo\n";
    }
} obj("kitty on your lap\n", "A house cat\n");

int main()
{
    return 0;
}
