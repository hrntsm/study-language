#include <iostream>
using namespace std;

class Kitty
{
public:
    Kitty(char *str) { cout << str; }
};

class Nekoneko_Zoo : public Kitty
{
public:
    Nekoneko_Zoo() : Kitty("Kitty on your lap\n")
    {
        cout << "Nekoneko_Zoo\n";
    }
} obj;

int main()
{
    return 0;
}
