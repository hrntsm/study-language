#include <iostream>
using namespace std;

class Kitty
{
private:
    int X;
public:
    int & getX();
} obj;

int & Kitty::getX(){
    return X;
}

int main(){
    obj.getX() = 10;
    cout << obj.getX();
    return 0;
}
