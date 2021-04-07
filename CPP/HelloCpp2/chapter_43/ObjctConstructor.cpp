#include <iostream>
using std::cout;

class Kitty
{
public:
    char *str;
    Kitty(char *str)
    {
        this->str = str;
    }
} ;

int main()
{
    Kitty obj1("Kitty on your lap\n");
    Kitty obj2 = "CC Sakura\n";

    cout << obj1.str << obj2.str;
    return 0;
}