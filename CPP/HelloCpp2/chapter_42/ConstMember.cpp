#include <iostream>
using std::cout;

class Kitty
{
public:
    const char *str;
    void print() const
    {
        // str = "Chobits";
        cout << str;
    }
    Kitty(const char *str)
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