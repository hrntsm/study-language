#include <iostream>

class Kitty
{
public:
    ~Kitty()
    {
        std::cout << "Kitty on your lap\n";
    }
};

int main()
{
    Kitty *obj;
    obj = new Kitty[10];
    
    delete[] obj;
    return 0;
}
