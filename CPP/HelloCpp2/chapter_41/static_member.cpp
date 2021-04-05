#include <iostream>
using std::cout;

class Kitty
{
public:
    static char *str;
};

char *Kitty::str = "Kitty on your lap\n";

int main()
{
    cout << Kitty::str;

    return 0;
}