#include <iostream>
#include <string>
using namespace std;

class Neko
{
    string name;
public:
    Neko(string);
    void naku() const;
};

Neko::Neko(string s) : name(s){}

void Neko::naku() const {
    cout << "aaa" << endl;
}

int main()
{
    Neko dora("aaa");
    dora.naku();

    return 0;
}

