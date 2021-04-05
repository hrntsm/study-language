#include <iostream>
using namespace std;

namespace Kitten
{
    class Kitty
    {
    };
    const char *str = "Kitty on your lap\n";
    void sakura()
    {
        cout << "CC Sakura\n";
    }
} // namespace Kitten

int main()
{
    Kitten::Kitty obj;
    cout << Kitten::str;
    Kitten::sakura();

    return 0;
}