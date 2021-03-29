#include <iostream>
#include <new>

int main()
{
    char *ch;
    int i;

    try
    {
        for (i = 0;; i++)
        {
            ch = new char[1048575];
            std::cout << i << "MB\r";
        }
    }
    catch (std::bad_alloc)
    {
        std::cout << "BAD ALLOC Exception : " << i << "MB\n";
        return 1;
    }

    return 0;
}
