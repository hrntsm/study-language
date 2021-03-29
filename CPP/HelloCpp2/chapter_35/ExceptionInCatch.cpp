#include <iostream>

void Kitty()
{
    try
    {
        throw "Kitty on your lap\n";
    }
    catch (char const *)
    {
        std::cout << "Exception : Kitty()\n";
        throw;
        std::cout << "Kitty()\n";
    }
}

int main()
{
    try
    {
        Kitty();
    }
    catch (char const *)
    {
        std::cout << "Exception : main()\n";
    }

    return 0;
}