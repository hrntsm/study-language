#include <iostream>

int main()
{
    int i;
    std::cout << "0 or 1 > ";
    std::cin >> i;

    try
    {
        if (i)
            throw "Exception : Kitty on your lap\n";
        else
            throw 100;
    }
    catch (int e)
    {
        std::cout << e;
    }
    catch (char const *e)
    {
        std::cout << e;
    }

    return 0;
}
