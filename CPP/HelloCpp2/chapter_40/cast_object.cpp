#include <iostream>
using std::cout;

class RGB
{
    unsigned char r, g, b;

public:
    RGB(unsigned char r, unsigned char g, unsigned char b)
    {
        this->r = r;
        this->g = g;
        this->b = b;
    }
    operator int()
    {
        return (r << 16) + (g << 8) + b;
    }
};

int main()
{
    RGB color(125, 100, 5);
    int i = color;

    cout << i;

    return 0;
}