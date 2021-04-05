#include <iostream>
using namespace std;

namespace Kitten
{
    namespace Kitty
    {
        const char *str = "Kitty on your lap\n";
    } // namespace Kitty
    void print()
    {
        cout << Kitty::str;
    }
} // namespace Kitten

int main()
{
    Kitten::print();
    cout << Kitten::Kitty::str;

    return 0;
}