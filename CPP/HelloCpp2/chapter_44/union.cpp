#include <iostream>
using std::cout;

union Kitty
{
    Kitty(char ch)
    {
        this->i = 0;
        this->ch = ch;
    }
    int getInt()
    {
        return i;
    }
    char getChar()
    {
        return ch;
    }

private:
    int i;
    char ch;
};

int main()
{
    Kitty obj('A');
    cout << "ch = " << obj.getChar() << '\n';
    cout << "i = " << obj.getInt() << '\n';

    return 0;
}