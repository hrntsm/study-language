#include <iostream>

int main()
{
    union
    {
        int i;
        char ch;
    };
    i = 0;

    ch = 'A';
    std::cout << i;

    return 0;
}