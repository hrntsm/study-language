#include <iostream>
using std::cout;

class Kitty
{
public:
    void print() const
    {
        cout << "Kitty on your lap\n";
    }
};

int main()
{
    const Kitty obj;
    obj.print();

    return 0;
}