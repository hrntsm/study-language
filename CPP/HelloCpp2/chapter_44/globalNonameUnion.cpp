#include <iostream>

static union
{
    int i;
    char ch;
};

int main()
{
    i = 0;
    ch = 'A';
    std::cout << i;

    return 0;
}
