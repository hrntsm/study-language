#include <iostream>

template <class X> void println(X out)
{
    std::cout << out << '\n';
}

int main()
{
    println("Kitty on your lap");
    println(10);
    println(1.053);

    return 0;
}
