#include <iostream>

int main()
{
    try
    {
        throw "Exception : Kitty on your lap\n";
        std::cout << "Di Gi Gharat\n";
    }
    catch (int e)
    {
        std::cout << e;
    }
    std::cout << "Kitty on your lap\n";

    return 0;
}
