#include <iostream>
using namespace std;

class Kitty
{
};

int main()
{
    Kitty obj;

    if (typeid(Kitty) == typeid(obj))
    {
        cout << "Kitty on your lap\n";
    }
    return 0;
}