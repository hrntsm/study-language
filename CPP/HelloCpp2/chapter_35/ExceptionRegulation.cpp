#include <iostream>

void Chobits()
{
    throw 10.1;
}

void Kitty() throw(int, char *)
{
    Chobits();
}

int main()
{
    try
    {
        Kitty();
    }
    catch (...)
    {
        std::cout << "Exception";
    }

    return 0;
}
