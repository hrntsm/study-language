#include <iostream>

template <class X> void printIn(X out)
{
    std::cout << out << '\n';
}

void printIn(float out)
{
    std::cout << "F:" << out << '\n';
}

int main()
{
    printIn("Kitty on your lap");
    printIn(54.220f);
    printIn(100.01);

    return 0;
}
