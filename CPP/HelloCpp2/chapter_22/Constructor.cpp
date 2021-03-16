#include <iostream>
using namespace std;

class Kitty
{
public:
    Kitty() { cout << "Kitty on your lap\n"; }
};

class LoveHina : public Kitty
{
public:
    LoveHina() { cout << "Love Hina\n"; }
} obj;

int main()
{
    return 0;
}
