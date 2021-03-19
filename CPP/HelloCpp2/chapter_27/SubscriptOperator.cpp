#include <iostream>
using namespace std;

class Array
{
    int ary[2];

public:
    int &operator[](int n)
    {
        return ary[n];
    }
} obj;

int main()
{
    obj[0] = 10;
    obj[1] = 100;

    cout << "obj[0] = " << obj[0] << '\n';
    cout << "obj[1] = " << obj[1] << '\n';
    return 0;
}
