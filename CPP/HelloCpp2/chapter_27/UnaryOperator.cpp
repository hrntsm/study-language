#include <iostream>
using namespace std;

class POINT
{
public:
    long x;
    long y;
    void operator++(int n)
    {
        x++;
        y++;
    }
    POINT operator++()
    {
        ++x;
        ++y;
        return *this;
    }
} obj1, obj2;

int main()
{
    obj1.x = 10;
    obj1.y = 5;
    obj2 = ++obj1;
    obj2++;

    cout << "x = " << obj1.x << "\ty = " << obj1.y << '\n';
    cout << "x = " << obj2.x << "\ty = " << obj2.y << '\n';

    return 0;
}
