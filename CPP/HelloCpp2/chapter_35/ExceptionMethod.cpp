#include <iostream>

void Chobits(bool b)
{
    if (b)
    {
        std::cout << "Chobits\n";
    }
    else
    {
        throw "Chobits()";
    }
}

void Kitty(bool b)
{
    Chobits(b);
}

int main()
{
    try
    {
        Kitty(true);
        Kitty(false);
    }
    catch (char const *str)
    {
        std::cout << "Exception : " << str << '\n';
    }

    return 0;
}
