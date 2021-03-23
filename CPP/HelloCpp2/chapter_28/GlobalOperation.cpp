#include <iostream>
using namespace std;

class Integer
{
public:
    int value;
    friend void operator +=(Integer &obj, int value);
    friend void operator >>(int value, Integer &obj);
    Integer()
    {
        value = 0;
    }
} obj;

void operator +=(Integer &obj, int value)
{
    obj.value += value;
}

void operator >>(int value, Integer &obj)
{
    obj.value += value;
}

int main()
{
    obj += 10;
    100 >> obj;

    cout << obj.value;
    return 0;
}
