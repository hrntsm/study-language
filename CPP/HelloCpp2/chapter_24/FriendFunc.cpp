#include <iostream>
using namespace std;

class Kitty
{
    char *str;
    friend char *getStr(Kitty &);
public:
    Kitty(char *str)
    {
        Kitty::str = str;
    }
} obj("Kitty on your lap\n");

char *getStr(Kitty &obj)
{
    return obj.str;
}

int main()
{
    cout << getStr(obj);
    return 0;
}
