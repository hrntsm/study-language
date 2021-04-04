#include <iostream>
using namespace std;

void Kitty(const int &cvar)
{
    int *var = const_cast<int *>(&cvar);
    *var += 100;
}

int main()
{
    int var = 1000;
    Kitty(var);
    cout << var;

    return 0;
}