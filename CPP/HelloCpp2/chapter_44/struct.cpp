#include <iostream>
using std::cout;

struct Kitty
{
    explicit Kitty(char *str)
    {
        this->str = str;
    }
    char *getStr()
    {
        return str;
    }
private:
    char *str;
};

int main()
{
    Kitty obj("Kitty on your lap\n");
    cout << obj.getStr();

    return 0;
}
