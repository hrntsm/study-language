#include <iostream>
using namespace std;

class Neko;

class Kitty
{
    char *str;
public:
    friend Neko;
    Kitty(char *str)
    {
        Kitty::str = str;
    }
} obj("Kitty on your lap");

class Neko
{
public:
    Neko(Kitty &obj)
    {
        cout << obj.str << '\n';
    }
};

int main()
{
    Neko nekoObj(::obj);
    return 0;
}
