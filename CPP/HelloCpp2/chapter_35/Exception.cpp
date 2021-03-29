#include <iostream>

int main()
{
    try
    {
        throw "Exception : Kitty on your lap\n";
        std::cout << "Di Gi Gharat\n";
    }
    catch (const char *str)
    {
        std::cout << str;
    }

    return 0;
}
