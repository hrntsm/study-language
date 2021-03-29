#include <iostream>

void Kitty(bool b)
{
    try
    {
        if (b)
            throw 10.1;
        else
            throw 100;
    }
    catch (double e)
    {
        std::cout << "Exception : " << e << '\n';
    }
    catch (...)
    {
        std::cout << "Exception : Kitty()\n";
    }
}

int main()
{
    Kitty(true);
    Kitty(false);
}
