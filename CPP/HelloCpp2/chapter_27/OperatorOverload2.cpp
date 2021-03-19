#include <iostream>
using namespace std;

class String
{
public:
    char *str;
    String operator=(char *str)
    {
        this->str = str;
        return *this;
    }
};

int main()
{
    String str1, str2;
    str1 = str2 = "Kitty on your lap\n";
    cout << str1.str << str2.str;
    return 0;
}
