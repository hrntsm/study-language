#include <iostream>

template <class X>

X max(X var1, X var2)
{
    if (var1 > var2)
    {
        return var1;
    }
    else
    {
        return var2;
    }
}

int main()
{
    std::cout << max(10, 100);

    return 0;
}
