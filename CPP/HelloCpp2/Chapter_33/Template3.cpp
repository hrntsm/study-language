#include <iostream>

template <class X1, class X2> void printIn(X1 var1, X2 var2)
{
    std::cout << var1 << " : " << var2 << '\n';
}

int main()
{
    printIn(100, 56.02);
    printIn('A', "Di Gi Gharat");
    printIn("Kitty on your lap", "Love Hina");

    return 0;
}
