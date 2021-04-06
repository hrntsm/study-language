#include <iostream>

class Kitty
{
public:
    mutable char *str;
    void print() const
    {
        str = "Chobits";
        std::cout << str;
    }
    Kitty(char *str)
    {
        this->str = str;
    }
};

int main()
{
    Kitty obj("Kitty on your lap\n");
    obj.print();
    return 0;
}