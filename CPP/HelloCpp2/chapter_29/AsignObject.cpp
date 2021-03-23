#include <iostream>

class Kitty
{
public:
    Kitty(char *str)
    {
        std::cout << str;
    }
};

int main()
{
    Kitty *obj;
    obj = new Kitty("Kitty on your lap\n");

    delete obj;
    return 0;
}
