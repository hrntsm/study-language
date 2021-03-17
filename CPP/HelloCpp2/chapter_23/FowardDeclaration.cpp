#include <iostream>
using namespace std;

class Neko;

class Kitty
{
public:
    Kitty(Neko);
};

class Neko
{
public:
    char *name;
    
    Neko(char *name)
    {
        Neko::name = name;
    }
} n_obj("Rena");

Kitty::Kitty(Neko obj)
{
    cout << obj.name << '\n';
}

int main()
{
    Kitty k_obj(n_obj);
    return 0;
}
